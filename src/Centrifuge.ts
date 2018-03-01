import {
    isFunction,
    isString,
    log,
    stripSlash,
    startsWith,
    endsWith,
    errorExists,
    objectToQuery,
    getKeyByValue,
} from './Functions';
import {Observable} from 'js-observable';
import * as protobuf from 'protobufjs';
import {Subscription} from './Subscription';
import {proto} from './Proto';

import {ICentrifugeConfig} from './interfaces';

export class Centrifuge extends Observable {

    private _config: ICentrifugeConfig = {};
    private _endpoint: string = null;
    private _status = 'disconnected';
    private _isSockJS = false;
    private _transport: any = null;
    private _transportName: string = null;
    private _transportClosed = true;
    private _reconnect = true;
    private _reconnecting = false;
    private _numRefreshFailed = 0;
    private _refreshTimeout: any = null;
    private _pongTimeout: any = null;
    private _pingInterval: any = null;
    private _commandId = 0;
    private _commands: proto.ICommand[] = [];
    private _isBatching = false;
    private _isAuthBatching = false;
    private _authChannels: any = {};
    private _clientID: string = null;
    private _callbacks: any = {};
    private _subs: any = {};
    private _retries = 0;
    private _latency: number = null;
    private _latencyStart: Date = null;
    private _lastMessageID: any = {};

    constructor(config: ICentrifugeConfig) {
        super();
        this._configure(config);
    }

    public get isProtobufFormat(): boolean {
        return this._config.format === 'protobuf';
    }

    public get isConnected(): boolean {
        return this._status === 'connected';
    }

    public get isDisconnected(): boolean {
        return this._status === 'disconnected';
    }

    public debug(...args: any[]): void {
        if (this._config.debug === true) {
            log('debug', ...args);
        }
    }

    public connect(): void {
        if (this.isConnected) {
            this.debug('Connect called when already connected');
            return;
        }
        if (this._status === 'connecting') {
            return;
        }
        this.debug('Start connecting');
        this._setStatus('connecting');
        this._clientID = null;
        this._reconnect = true;
        this._setTransport();
    }

    public disconnect(): void {
        this._disconnect('client');
    }

    public ping(): void {
        this.addCommand({
            method: proto.MethodType.PING
        }).then(() => {
        }, () => {
        });
    }

    public startBatching(): void {
        // start collecting messages without sending them to Centrifuge until flush method called
        this._isBatching = true;
    }

    public stopBatching(flush: boolean = false): void {
        // stop collecting messages
        this._isBatching = false;
        if (flush === true) {
            this.flush();
        }
    }

    public flush(): void {
        // send batched messages to Centrifuge
        const commands = [...this._commands];
        this._send(commands);
        this._commands = [];
    }

    public startAuthBatching(): void {
        // start collecting private channels to create bulk authentication
        // request to authEndpoint when stopAuthBatching will be called
        this._isAuthBatching = true;
    }

    public stopAuthBatching(): void {
        // create request to authEndpoint with collected private channels
        // to ask if this client can subscribe on each channel
        let i: string;
        let channel: string;

        this._isAuthBatching = false;
        const channels = [];

        for (channel in this._authChannels) {
            if (this._authChannels.hasOwnProperty(channel)) {
                if (!this._getSub(channel)) {
                    continue;
                }
                channels.push(channel);
            }
        }
        this._authChannels = {};

        if (!channels.length) {
            return;
        }

        const cb = (error: boolean, _data: any) => {
            if (error === true) {
                this.debug('Authorization request failed');
                for (i in channels) {
                    if (channels.hasOwnProperty(i)) {
                        channel = channels[i];
                        this._subscribeError({
                            message: 'Authorization request failed',
                        }, channel);
                    }
                }
                return;
            }

            // try to send all subscriptions in one request.
            let batch = false;
            if (!this._isBatching) {
                this.startBatching();
                batch = true;
            }

            for (i in channels) {
                if (channels.hasOwnProperty(i)) {
                    channel = channels[i];
                    const channelResponse = _data[channel];
                    if (!channelResponse) {
                        this._subscribeError({
                            message: 'Channel not found in authorization response',
                        }, channel);
                        continue;
                    }
                    if (!channelResponse.status || channelResponse.status === 200) {
                        this._subscribe({
                            channel,
                            client: this._clientID,
                            info: channelResponse.info,
                            sign: channelResponse.sign
                        });
                    } else {
                        this._subscribeError({
                            message: channelResponse.status,
                        }, channel);
                    }
                }
            }

            if (batch) {
                this.stopBatching(true);
            }
        };

        const data = {
            client: this._clientID,
            channels,
        };

        if (isFunction(this._config.onPrivateChannelAuth)) {
            this._config.onPrivateChannelAuth({
                data,
            }, cb);
        } else {
            this._request(
                this._config.authEndpoint,
                this._config.authParams,
                this._config.authHeaders,
                data,
                cb
            );
        }
    }

    public subscribe(channel: string, events?: any): Subscription {
        if (!isString(channel)) {
            throw new Error('Illegal argument type: channel must be a string');
        }
        if (!this._config.resubscribe && !this.isConnected) {
            throw new Error('Can not only subscribe in connected state when resubscribe option is off');
        }

        const currentSub = this._getSub(channel);

        if (currentSub !== null) {
            currentSub.setEvents(events);
            if (currentSub.isUnsubscribed) {
                currentSub.subscribe();
            }
            return currentSub;
        } else {
            const sub = new Subscription(this, channel, events);
            this._subs[channel] = sub;
            sub.subscribe();
            return sub;
        }
    }

    public subscribeSub(sub: Subscription): void {
        const channel = sub.channel;

        if (!(channel in this._subs)) {
            this._subs[channel] = sub;
        }

        if (!this.isConnected) {
            // subscribe will be called later
            sub.setNew();
            return;
        }

        sub.setSubscribing();

        // If channel name does not start with privateChannelPrefix - then we
        // can just send subscription message to Centrifuge. If channel name
        // starts with privateChannelPrefix - then this is a private channel
        // and we should ask web application backend for permission first.
        if (startsWith(channel, this._config.privateChannelPrefix)) {
            // private channel
            if (this._isAuthBatching) {
                this._authChannels[channel] = true;
            } else {
                this.startAuthBatching();
                this.subscribeSub(sub);
                this.stopAuthBatching();
            }
        } else {
            this._subscribe({
                channel,
            });
        }
    }

    public unsubscribeSub(sub: Subscription): void {
        if (this.isConnected) {
            // No need to unsubscribe in disconnected state - i.e. client already unsubscribed.
            this.addCommand({
                method: proto.MethodType.UNSUBSCRIBE,
                params: <any> {
                    channel: sub.channel
                }
            }).then((result: any) => {
                this.decodeResult(result, proto.UnsubscribeResult);
                sub.setUnsubscribed();
            }, () => {
            });
        }
    }

    public addCommand(command: proto.ICommand): Promise<any> {
        return new Promise((resolve, reject) => {
            const id = this._getNextCommandId();
            command.id = id;
            if (this._isBatching === true) {
                this._commands.push(command);
            } else {
                this._send([command]);
            }
            this._callbacks[id] = {
                resolve,
                reject,
            };
            setTimeout(() => {
                delete this._callbacks[id];
                reject({
                    message: 'Timeout',
                });
            }, this._config.timeout);
        });
    }

    public decodeResult(result: any, protoClass?: any) {
        let resultName = '';
        if (protoClass) {
            if (result instanceof Uint8Array) {
                result = protoClass.decode(result);
            } else {
                resultName = ' ' + protoClass.name;
            }
        }
        this.debug('Received' + resultName, result);
        return result;
    }

    public static log(...args: any[]): void {
        log('info', ...args);
    }

    public static error(...args: any[]): void {
        log('error', ...args);
    }

    private _configure(config: ICentrifugeConfig): void {
        this.debug('Configuring Centrifuge with', config);
        config = Object.assign({
            format: 'json',
            retry: 1000,
            maxRetry: 20000,
            timeout: 5000,
            info: '',
            resubscribe: true,
            ping: true,
            pingInterval: 30000,
            pongWaitTimeout: 5000,
            debug: false,
            insecure: false,
            privateChannelPrefix: '$',
            refreshEndpoint: '/centrifuge/refresh/',
            refreshHeaders: {},
            refreshParams: {},
            refreshData: {},
            refreshAttempts: 0,
            refreshInterval: 3000,
            authEndpoint: '/centrifuge/auth/',
            authHeaders: {},
            authParams: {},
        }, config);

        config.format = config.format.toLowerCase();
        if (['json', 'protobuf'].indexOf(config.format) === -1) {
            config.format = 'json';
        }

        if (!config.url) {
            throw new Error('Missing required configuration parameter \'url\' specifying server URL');
        }
        config.url = stripSlash(config.url);
        this._endpoint = config.url;

        if (isFunction(config.sockJS)) {
            this._isSockJS = true;
            if (!config.transports || !config.transports.length) {
                config.transports = [
                    'websocket',
                    'xdr-streaming',
                    'xhr-streaming',
                    'eventsource',
                    'iframe-eventsource',
                    'iframe-htmlfile',
                    'xdr-polling',
                    'xhr-polling',
                    'iframe-xhr-polling',
                    'jsonp-polling'
                ];
            }
            this._endpoint = this._endpoint
                .replace('ws://', 'http://')
                .replace('wss://', 'https://');
            if (!endsWith(this._endpoint, 'connection/sockjs')) {
                this._endpoint = this._endpoint + '/connection/sockjs';
            }
        } else {
            if (!isFunction(WebSocket)) {
                throw new Error('No Websocket support and no SockJS configured, can not connect');
            }
            this._endpoint = this._endpoint
                .replace('http://', 'ws://')
                .replace('https://', 'wss://');
            if (!endsWith(this._endpoint, 'connection/websocket')) {
                this._endpoint = this._endpoint + '/connection/websocket';
            }
        }
        if (config.format === 'protobuf') {
            this._endpoint += '?format=protobuf';
        }

        if (!config.user) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'user\' specifying user\'s unique ID in your application');
            } else {
                this.debug('Configuration parameter \'user\' not found but this is OK for insecure mode - anonymous access will be used');
            }
        } else {
            if (!isString(config.user)) {
                Centrifuge.log('Configuration parameter \'user\' expected to be string');
            }
        }

        if (!config.exp) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'time\'');
            } else {
                this.debug('Configuration parameter \'exp\' not found but this is OK for insecure mode');
            }
        } else {
            if (!isString(config.exp)) {
                Centrifuge.log('Configuration parameter \'exp\' expected to be string');
            }
        }

        if (!config.sign) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'sign\' specifying the sign of authorization request');
            } else {
                this.debug('Configuration parameter \'sign\' not found but this is OK for insecure mode');
            }
        } else {
            if (!isString(config.sign)) {
                Centrifuge.log('Configuration parameter \'sign\' expected to be string');
            }
        }

        if (config.info && !isString(config.info)) {
            Centrifuge.log('Configuration parameter \'info\' expected to be string');
        }

        this._config = config;
    }

    private _request(url: string, params: any, headers: any, data: any, callback: Function): void {
        this.debug('Sending POST request to', url);
        let query = objectToQuery(params);
        if (query.length > 0) {
            query = '?' + query;
        }
        const _headers = new Headers();
        _headers.append('X-Requested-With', 'XMLHttpRequest');
        _headers.append('Content-Type', 'application/json');
        for (const headerName in headers) {
            if (headers.hasOwnProperty(headerName)) {
                _headers.append(headerName, headers[headerName]);
            }
        }
        fetch(url + query, {
            method: 'POST',
            headers: _headers,
            body: data,
            credentials: 'include',
            mode: 'cors',
        }).then((response: Response) => {
            if (response.ok) {
                return response.json();
            }
            Centrifuge.error('Network response was not ok', response.status);
        }).then((callbackData: any) => {
            callback(false, callbackData);
        }).catch((error: any) => {
            Centrifuge.error('Network response error', error);
        });
    }

    private _subscribe(params: any) {
        const channel = params.channel;
        const msg = {
            method: proto.MethodType.SUBSCRIBE,
            params,
        };
        if (this._recover(channel) === true) {
            msg.params.recover = true;
            msg.params.last = this._getLastID(channel);
        }
        this.addCommand(msg).then((result: any) => {
            this._subscribeResult(this.decodeResult(result, proto.SubscribeResult), channel);
        }, (error: proto.IError) => {
            this._subscribeError(error, channel);
        });
    }

    private _recover(channel: string): boolean {
        return channel in this._lastMessageID;
    }

    private _getLastID(channel: string): string {
        const lastUID = this._lastMessageID[channel];
        if (lastUID) {
            this.debug('Last uid found and sent for channel', channel);
            return lastUID;
        } else {
            this.debug('No last uid found for channel', channel);
            return '';
        }
    }

    private _getSub(channel: string): Subscription {
        return this._subs[channel] || null;
    }

    private _clearConnectedState(reconnect: boolean): void {
        this._clientID = null;

        // fire errbacks of registered calls.
        for (const id in this._callbacks) {
            if (this._callbacks.hasOwnProperty(id)) {
                this._callbacks[id].reject({
                    message: 'Disconnected',
                });
            }
        }
        this._callbacks = {};

        // fire unsubscribe events
        for (const channel in this._subs) {
            if (this._subs.hasOwnProperty(channel)) {
                const sub = this._getSub(channel);
                if (reconnect) {
                    if (sub.isSuccess) {
                        sub.triggerUnsubscribe();
                    }
                    sub.setSubscribing();
                } else {
                    sub.setUnsubscribed();
                }
            }
        }

        if (!this._config.resubscribe || !this._reconnect) {
            // completely clear connected state
            this._subs = {};
        }
    }

    private _setStatus(status: string): void {
        if (this._status !== status) {
            this.debug('Status:', this._status, '->', status);
            this._status = status;
        }
    }

    private _disconnect(reason: string, shouldReconnect: boolean = false): void {
        if (this.isDisconnected) {
            return;
        }
        this.debug('Disconnected:', reason + '.', 'shouldReconnect:', shouldReconnect);

        if (shouldReconnect === false) {
            this._reconnect = false;
        }

        this._clearConnectedState(shouldReconnect);

        if (!this.isDisconnected) {
            this._setStatus('disconnected');
            if (this._refreshTimeout) {
                clearTimeout(this._refreshTimeout);
            }
            if (this._reconnecting === false) {
                this.trigger('disconnect', [{
                    reason,
                    reconnect: shouldReconnect,
                }]);
            }
        }

        if (!this._transportClosed) {
            this._transport.close();
        }
    }

    private _send(commands: proto.ICommand[]): void {
        if (!commands.length) {
            return;
        }
        const isProto = this.isProtobufFormat;
        const encodedCommands = [];
        let writer;
        if (isProto) {
            writer = protobuf.Writer.create();
        }
        for (const i in commands) {
            if (commands.hasOwnProperty(i)) {
                const command = Object.assign({}, commands[i]);
                if (isProto) {
                    switch (command.method) {
                        case proto.MethodType.CONNECT:
                            command.params = Centrifuge._encodeParams(command.params, proto.ConnectRequest);
                            break;
                        case proto.MethodType.REFRESH:
                            command.params = Centrifuge._encodeParams(command.params, proto.RefreshRequest);
                            break;
                        case proto.MethodType.SUBSCRIBE:
                            command.params = Centrifuge._encodeParams(command.params, proto.SubscribeRequest);
                            break;
                        case proto.MethodType.UNSUBSCRIBE:
                            command.params = Centrifuge._encodeParams(command.params, proto.UnsubscribeRequest);
                            break;
                        case proto.MethodType.PUBLISH:
                            command.params = Centrifuge._encodeParams(command.params, proto.PublishRequest);
                            break;
                        case proto.MethodType.PRESENCE:
                            command.params = Centrifuge._encodeParams(command.params, proto.PresenceRequest);
                            break;
                        case proto.MethodType.PRESENCE_STATS:
                            command.params = Centrifuge._encodeParams(command.params, proto.PresenceStatsRequest);
                            break;
                        case proto.MethodType.HISTORY:
                            command.params = Centrifuge._encodeParams(command.params, proto.HistoryRequest);
                            break;
                        case proto.MethodType.PING:
                            command.params = Centrifuge._encodeParams(command.params, proto.PingRequest);
                            break;
                        case proto.MethodType.RPC:
                            command.params = Centrifuge._encodeParams(command.params, proto.RPCRequest);
                            break;
                        case proto.MethodType.MESSAGE:
                            command.params = Centrifuge._encodeParams(command.params, proto.Message);
                            break;
                    }
                    proto.Command.encodeDelimited(command, writer);
                } else {
                    encodedCommands.push(JSON.stringify(command));
                }
                if (this._config.debug === true) {
                    this.debug('Sent', getKeyByValue(proto.MethodType, command.method) || command.method, commands[i]);
                }
            }
        }
        if (isProto) {
            this._transport.send(writer.finish());
        } else {
            this._transport.send(encodedCommands.join("\n"));
        }
    }

    private _getNextCommandId(): number {
        return ++this._commandId;
    }

    private _stopPing(): void {
        if (this._pongTimeout !== null) {
            clearTimeout(this._pongTimeout);
        }
        if (this._pingInterval !== null) {
            clearInterval(this._pingInterval);
        }
    }

    private _startPing(): void {
        if (this._config.ping !== true || this._config.pingInterval <= 0 || !this.isConnected) {
            return;
        }
        this._pingInterval = setInterval(() => {
            if (!this.isConnected) {
                this._stopPing();
                return;
            }
            this.ping();
            this._pongTimeout = setTimeout(() => {
                this._disconnect('no ping', true);
            }, this._config.pongWaitTimeout);
        }, this._config.pingInterval);
    }

    private _restartPing(): void {
        this._stopPing();
        this._startPing();
    }

    private _getRetryInterval(): number {
        this._retries += 1;
        const jitter = 0.5 * Math.random();
        let interval = this._config.retry * Math.pow(2, this._retries + 1);
        if (interval > this._config.maxRetry) {
            interval = this._config.maxRetry;
        }
        return Math.floor((1 - jitter) * interval);
    }

    private _refreshFailed(): void {
        this._numRefreshFailed = 0;
        if (!this.isDisconnected) {
            this._disconnect('refresh failed');
        }
        if (this._config.refreshFailed) {
            this._config.refreshFailed();
        }
    }

    private _refresh(): void {
        // ask web app for connection parameters - user ID, time, info and sign
        this.debug('Refresh credentials');

        if (this._config.refreshAttempts === 0) {
            this.debug('Refresh attempts set to 0, do not send refresh request at all');
            this._refreshFailed();
            return;
        }

        if (this._refreshTimeout !== null) {
            clearTimeout(this._refreshTimeout);
        }

        const cb = (err: boolean, data: proto.IRefreshRequest) => {
            if (err === true) {
                // We don't perform any connection status related actions here as we are
                // relying on Centrifugo that must close connection eventually.
                this.debug('Error getting connection credentials from refresh endpoint', data);
                this._numRefreshFailed++;
                if (this._refreshTimeout) {
                    clearTimeout(this._refreshTimeout);
                }
                if (this._config.refreshAttempts !== null && this._numRefreshFailed >= this._config.refreshAttempts) {
                    this._refreshFailed();
                    return;
                }
                this._refreshTimeout = setTimeout(() => {
                    this._refresh();
                }, this._config.refreshInterval + Math.round(Math.random() * 1000));
                return;
            }
            this._numRefreshFailed = 0;
            this._config.user = data.user;
            this._config.exp = data.exp;
            this._config.sign = data.sign;
            if ('info' in data) {
                this._config.info = data.info;
            } else {
                data.info = '';
            }
            if (this.isDisconnected) {
                this.debug('Credentials refreshed, connect from scratch');
                this.connect();
            } else {
                this.debug('Send refreshed credentials');
                this.addCommand({
                    method: proto.MethodType.REFRESH,
                    params: <any> data,
                }).then((result: any) => {
                    this._refreshResult(this.decodeResult(result, proto.RefreshResult));
                }, () => {
                });
            }
        };

        if (this._config.onRefresh !== null) {
            this._config.onRefresh({}, cb);
        } else {
            this._request(
                this._config.refreshEndpoint,
                this._config.refreshParams,
                this._config.refreshHeaders,
                this._config.refreshData,
                cb
            );
        }
    }

    private _connectResult(result: proto.IConnectResult): void {
        if (this.isConnected) {
            return;
        }
        if (this._latencyStart !== null) {
            this._latency = (new Date()).getTime() - this._latencyStart.getTime();
            this._latencyStart = null;
        }
        if (result.expires) {
            if (result.expired) {
                this._reconnecting = true;
                this._disconnect('expired', true);
                this._refresh();
                return;
            }
        }
        this._clientID = result.client;
        this._setStatus('connected');

        if (this._refreshTimeout) {
            clearTimeout(this._refreshTimeout);
        }

        if (result.expires) {
            this._refreshTimeout = setTimeout(() => {
                this._refresh();
            }, result.ttl * 1000);
        }

        if (this._config.resubscribe) {
            this.startBatching();
            this.startAuthBatching();
            for (const channel in this._subs) {
                if (this._subs.hasOwnProperty(channel)) {
                    const sub = this._getSub(channel);
                    if (sub.shouldResubscribe()) {
                        this.subscribeSub(sub);
                    }
                }
            }
            this.stopAuthBatching();
            this.stopBatching(true);
        }

        this._restartPing();
        this.trigger('connect', [{
            version: result.version,
            client: result.client,
            transport: this._transportName,
            latency: this._latency
        }]);
    }

    private _subscribeResult(result: proto.ISubscribeResult, channel: string): void {
        const sub = this._getSub(channel);
        if (!sub || !sub.isSubscribing) {
            return;
        }
        let publications = result.publications;
        if (publications && publications.length) {
            // handle missed messages
            publications = publications.reverse();
            for (const i in publications) {
                if (publications.hasOwnProperty(i)) {
                    this._publicationResult(publications[i]);
                }
            }
        } else {
            if ('last' in result) {
                // no missed messages found so set last message id from body.
                this._lastMessageID[channel] = result.last;
            }
        }
        sub.setSubscribeSuccess(result.recovered || false);
    }

    private _subscribeError(error: proto.IError, channel: string): void {
        const sub = this._getSub(channel);
        if (!sub || !sub.isSubscribing) {
            return;
        }
        this.trigger('error', [{
            error,
        }]);
        sub.setSubscribeError(error);
    }

    private _refreshResult(result: proto.IRefreshResult): void {
        if (this._refreshTimeout) {
            clearTimeout(this._refreshTimeout);
        }
        if (result.expires) {
            if (result.expired) {
                this._refreshTimeout = setTimeout(() => {
                    this._refresh();
                }, this._config.refreshInterval + Math.round(Math.random() * 1000));
                return;
            }
            this._clientID = result.client;
            this._refreshTimeout = setTimeout(() => {
                this._refresh();
            }, result.ttl * 1000);
        }
    }

    private _joinResult(result: proto.IMessage): void {
        this.debug('Received JOIN result', result);
        const sub = this._getSub(result.channel);
        if (!sub) {
            return;
        }
        sub.trigger('join', [result]);
    }

    private _leaveResult(result: proto.IMessage): void {
        this.debug('Received LEAVE result', result);
        const sub = this._getSub(result.channel);
        if (!sub) {
            return;
        }
        sub.trigger('leave', [result]);
    }

    private _publicationResult(result: proto.IMessage): void {
        this.debug('Received PUBLICATION result', result);
        const data = <proto.IPublication> result.data;
        const channel = result.channel;

        // keep last uid received from channel.
        this._lastMessageID[channel] = data.uid;

        const sub = this._getSub(channel);
        if (!sub) {
            return;
        }
        sub.trigger('message', [data]);
    }

    private _handleReply(reply: proto.IReply): void {
        const id = reply.id;
        if (!(id in this._callbacks)) {
            return;
        }
        const callbacks = this._callbacks[id];
        if (!errorExists(reply)) {
            callbacks.resolve(reply.result);
        } else {
            callbacks.reject(reply.error);
            this.trigger('error', [reply.error]);
        }
        delete this._callbacks[id];
    }

    private _dispatchMessage(message: any): void {
        if (message === undefined || message === null) {
            this.debug('Dispatch: got undefined or null message');
            return;
        }
        switch (message.type) {
            case proto.MessageType.JOIN:
                this._joinResult(message);
                break;
            case proto.MessageType.LEAVE:
                this._leaveResult(message);
                break;
            case proto.MessageType.PUBLICATION:
                this._publicationResult(message);
                break;
            default:
                this._handleReply(message);
        }
    }

    private _receive(data: any): void {
        if (Object.prototype.toString.call(data) === Object.prototype.toString.call([])) {
            // array of responses received
            for (const i in data) {
                if (data.hasOwnProperty(i)) {
                    this._dispatchMessage(data[i]);
                }
            }
        } else if (Object.prototype.toString.call(data) === Object.prototype.toString.call({})) {
            // one response received
            this._dispatchMessage(data);
        }
    }

    private _setTransport(): void {
        const isProto = this.isProtobufFormat;

        if (this._isSockJS) {
            const sockjsOptions = {
                transports: this._config.transports
            };
            if (this._config.server) {
                sockjsOptions['server'] = this._config.server;
            }
            this._transport = new this._config.sockJS(this._endpoint, null, sockjsOptions);
        } else {
            this._transport = new WebSocket(this._endpoint);
            if (isProto) {
                this._transport.binaryType = 'arraybuffer';
            }
        }

        this._transport.onopen = () => {
            this._transportClosed = false;
            this._reconnecting = false;

            if (this._isSockJS) {
                this._transportName = this._transport.transport;
                this._transport.onheartbeat = () => {
                    this._restartPing();
                };
            } else {
                this._transportName = 'raw-websocket';
            }

            if (this._retries) {
                this.debug('Reset retries count to 0');
                this._retries = 0;
            }

            const msg = {
                method: proto.MethodType.CONNECT,
                params: <any> {
                    user: this._config.user,
                    info: this._config.info,
                }
            };

            if (!this._config.insecure) {
                // in insecure client mode we don't need time and sign.
                msg.params.exp = this._config.exp;
                msg.params.sign = this._config.sign;
            }
            this._latencyStart = new Date();
            this.addCommand(msg).then((result: any) => {
                this._connectResult(this.decodeResult(result, proto.ConnectResult));
            }, () => {
            });
        };

        this._transport.onerror = (error: any) => {
            this.debug('Transport level error', error);
        };

        this._transport.onclose = (event: any) => {
            this._transportClosed = true;
            let reason = 'Connection closed';
            let reconnect = true;
            if (event && 'reason' in event && event.reason) {
                try {
                    const advice = JSON.parse(event.reason);
                    this.debug(reason + '. Reason is an advice object:', advice);
                    reason = advice.reason;
                    reconnect = advice.reconnect;
                } catch (e) {
                    reason = event.reason;
                    this.debug(reason + '. Reason is a plain string:', reason);
                    reconnect = reason !== 'disconnect';
                }
            }

            // onTransportClose callback should be executed every time transport was closed.
            // This can be helpful to catch failed connection events (because our disconnect
            // event only called once and every future attempts to connect do not fire disconnect
            // event again).
            if (this._config.onTransportClose) {
                this._config.onTransportClose({
                    event,
                    reason,
                    reconnect,
                });
            }

            this._disconnect(reason, reconnect);

            if (this._reconnect === true) {
                this._reconnecting = true;
                const interval = this._getRetryInterval();
                this.debug('Reconnect after ' + interval + ' milliseconds');
                setTimeout(() => {
                    if (this._reconnect === true) {
                        this.connect();
                    }
                }, interval);
            }
        };

        this._transport.onmessage = (event: any) => {
            if (isProto) {
                const reader = protobuf.Reader.create(new Uint8Array(event.data));
                while (reader.pos < reader.len) {
                    this._receive(proto.Reply.decodeDelimited(reader));
                }
            } else {
                const replies = event.data.split("\n");
                for (const i in replies) {
                    if (replies.hasOwnProperty(i) && replies[i]) {
                        this._receive(JSON.parse(replies[i]));
                    }
                }
            }
            this._restartPing();
        };
    }

    private static _encodeParams(params: any, protoClass: any): Uint8Array {
        return params ? protoClass.encode(params).finish() : null;
    }

}
