declare var ActiveXObject: ActiveXObject;

import {
    isFunction,
    isString,
    log,
    stripSlash,
    startsWith,
    endsWith,
    errorExists,
    objectToQuery,
} from './Functions';
import {Observable} from 'js-observable';
import {Subscription} from './Subscription';
import {
    ISockJSOptions,
    ICentrifugeConfig,
    ICentrifugeError,
    ICentrifugeCredentials,
    ICentrifugeMessage,
    ICentrifugeConnectMessage,
    ICentrifugePingMessage,
    ICentrifugeSubscribeMessage,
    ICentrifugeUnsubscribeMessage,
    ICentrifugeRefreshMessage,
    ICentrifugeConnectResponse,
    ICentrifugeRefreshResponse,
    ICentrifugeSubscribeResponse,
    ICentrifugeUnsubscribeResponse,
    ICentrifugeJoinResponse,
    ICentrifugeLeaveResponse,
} from './interfaces';

interface ActiveXObject {
    new(s: string): any;
}

export class Centrifuge extends Observable {

    public static jsonpCallbacks: any = {};
    public static nextJSONPCallbackID = 1;

    private _config: ICentrifugeConfig = {};
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
    private _messageId = 0;
    private _messages: ICentrifugeMessage[] = [];
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

    public connect(): void {
        if (this.isConnected()) {
            this._debug('Connect called when already connected');
            return;
        }
        if (this._status === 'connecting') {
            return;
        }

        this._debug('Start connecting');
        this._clientID = null;
        this._reconnect = true;
        this._setStatus('connecting');
        this._setTransport();
    }

    public disconnect(): void {
        this._disconnect('client');
    }

    public isConnected(): boolean {
        return this._status === 'connected';
    }

    public isDisconnected(): boolean {
        return this._status === 'disconnected';
    }

    public ping(): void {
        this.addMessage(<ICentrifugePingMessage>{
            method: 'ping'
        }).then((response: any) => {
        }, (error: ICentrifugeError) => {
        });
    }

    public startBatching(): void {
        // start collecting messages without sending them to Centrifuge until flush
        // method called
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
        const messages = this._messages.slice(0);
        this._messages = [];
        this._send(messages);
    }

    public startAuthBatching(): void {
        // start collecting private channels to create bulk authentication
        // request to authEndpoint when stopAuthBatching will be called
        this._isAuthBatching = true;
    }

    public stopAuthBatching(): void {
        let i: string;
        let channel: string;

        // create request to authEndpoint with collected private channels
        // to ask if this client can subscribe on each channel
        this._isAuthBatching = false;
        const authChannels = this._authChannels;
        this._authChannels = {};
        const channels = [];

        for (channel in authChannels) {
            if (authChannels.hasOwnProperty(channel)) {
                if (!this._getSub(channel)) {
                    continue;
                }
                channels.push(channel);
            }
        }

        if (channels.length === 0) {
            return;
        }

        const cb = (err: boolean, _data: any) => {
            if (err === true) {
                this._debug('Authorization request failed');
                for (i in channels) {
                    if (channels.hasOwnProperty(i)) {
                        channel = channels[i];
                        this._subscribeError(<ICentrifugeError>{
                            error: 'authorization request failed',
                            advice: 'fix',
                            body: {
                                channel,
                            }
                        });
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
                        // subscription:error
                        this._subscribeError(<ICentrifugeError>{
                            error: 'channel not found in authorization response',
                            advice: 'fix',
                            body: {
                                channel,
                            }
                        });
                        continue;
                    }
                    if (!channelResponse.status || channelResponse.status === 200) {
                        const msg = <ICentrifugeSubscribeMessage>{
                            method: 'subscribe',
                            params: {
                                channel: channel,
                                client: this.getClientId(),
                                info: channelResponse.info,
                                sign: channelResponse.sign
                            }
                        };
                        if (this._recover(channel) === true) {
                            msg.params.recover = true;
                            msg.params.last = this._getLastID(channel);
                        }
                        this.addMessage(msg).then((response: ICentrifugeSubscribeResponse) => {
                            this._subscribeResponse(response);
                        }, (error: ICentrifugeError) => {
                        });
                    } else {
                        this._subscribeError(<ICentrifugeError>{
                            error: channelResponse.status,
                            body: {
                                channel: channel
                            }
                        });
                    }
                }
            }

            if (batch) {
                this.stopBatching(true);
            }

        };

        const data = {
            client: this.getClientId(),
            channels,
        };

        if (isFunction(this._config.onPrivateChannelAuth)) {
            this._config.onPrivateChannelAuth({
                data,
            }, cb);
        } else {
            const transport = this._config.authTransport.toLowerCase();
            if (transport === 'ajax') {
                this._ajax(
                    this._config.authEndpoint,
                    this._config.authParams,
                    this._config.authHeaders,
                    data,
                    cb
                );
            } else if (transport === 'jsonp') {
                this._jsonp(
                    this._config.authEndpoint,
                    this._config.authParams,
                    this._config.authHeaders,
                    data,
                    cb
                );
            } else {
                throw new Error('Unknown private channel auth transport ' + transport);
            }
        }
    }

    public subscribe(channel: string, events?: any): Subscription {
        if (!isString(channel)) {
            throw new Error('Illegal argument type: channel must be a string');
        }
        if (!this._config.resubscribe && !this.isConnected()) {
            throw new Error('Can not only subscribe in connected state when resubscribe option is off');
        }

        const currentSub = this._getSub(channel);

        if (currentSub !== null) {
            currentSub.setEvents(events);
            if (currentSub.isUnsubscribed()) {
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

        if (!this.isConnected()) {
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
            const msg = <ICentrifugeSubscribeMessage>{
                method: 'subscribe',
                params: {
                    channel,
                }
            };
            if (this._recover(channel) === true) {
                msg.params.recover = true;
                msg.params.last = this._getLastID(channel);
            }
            this.addMessage(msg).then((response: ICentrifugeSubscribeResponse) => {
                this._subscribeResponse(response);
            }, (error: ICentrifugeError) => {
                this._subscribeError(error);
            });
        }
    }

    public unsubscribeSub(sub: Subscription): void {
        if (this.isConnected()) {
            // No need to unsubscribe in disconnected state - i.e. client already unsubscribed.
            this.addMessage(<ICentrifugeUnsubscribeMessage>{
                method: 'unsubscribe',
                params: {
                    channel: sub.channel
                }
            }).then((response: ICentrifugeUnsubscribeResponse) => {
                this._unsubscribeResponse(response);
            }, (error: ICentrifugeError) => {
            });
        }
    }

    public getClientId(): string {
        return this._clientID;
    }

    public registerCall(uid: string, callback?: Function, errback?: Function) {
        this._callbacks[uid] = {
            callback: callback,
            errback: errback
        };
        setTimeout(() => {
            delete this._callbacks[uid];
            if (isFunction(errback)) {
                errback(Centrifuge.createErrorObject('timeout', 'retry'));
            }
        }, this._config.timeout);
    }

    public addMessage(message: ICentrifugeMessage): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            const uid = this._getNextMessageId() + '';
            message.uid = uid;
            if (this._isBatching === true) {
                this._messages.push(message);
            } else {
                this._send([message]);
            }
            this.registerCall(uid, resolve, reject);
        });
    }

    public static createErrorObject(error: string, advice?: string): ICentrifugeError {
        const result: ICentrifugeError = {
            error,
        };
        if (advice) {
            result.advice = advice;
        }
        return result;
    }

    public static log(...args: any[]): void {
        log('info', args);
    }

    private _debug(...args: any[]): void {
        if (this._config.debug === true) {
            log('debug', args);
        }
    }

    private _jsonp(url: string, params: any, headers: any, data: any, callback: Function) {
        if (Object.keys(headers).length > 0) {
            Centrifuge.log('Only AJAX request allows to send custom headers, it is not possible with JSONP.');
        }
        this._debug('Sending JSONP request to', url);

        const callbackName = 'centrifuge_jsonp_' + Centrifuge.nextJSONPCallbackID.toString();
        Centrifuge.nextJSONPCallbackID++;

        const script = document.createElement('script');

        const timeoutTrigger = setTimeout(() => {
            Centrifuge.jsonpCallbacks[callbackName] = () => {
            };
            callback(true, 'timeout');
        }, 3000);

        Centrifuge.jsonpCallbacks[callbackName] = (callbackData: any) => {
            clearTimeout(timeoutTrigger);
            callback(false, callbackData);
            delete Centrifuge.jsonpCallbacks[callbackName];
        };

        const callback_name = 'Centrifuge._jsonpCallbacks[\'' + callbackName + '\']';
        script.src = this._config.authEndpoint +
            '?callback=' + encodeURIComponent(callback_name) +
            '&data=' + encodeURIComponent(JSON.stringify(data)) +
            '&' + objectToQuery(params);

        const head = document.getElementsByTagName('head')[0] || document.documentElement;
        head.insertBefore(script, head.firstChild);
    }

    private _ajax(url: string, params: any, headers: any, data: any, callback: Function) {
        this._debug('Sending AJAX request to', url);

        const xhr = (XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'));

        let query = objectToQuery(params);
        if (query.length > 0) {
            query = '?' + query;
        }

        xhr.open('POST', url + query, true);
        if ('withCredentials' in xhr) {
            xhr.withCredentials = true;
        }

        // add request headers
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/json');
        for (const headerName in headers) {
            if (headers.hasOwnProperty(headerName)) {
                xhr.setRequestHeader(headerName, headers[headerName]);
            }
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let callbackData,
                        parsed = false;
                    try {
                        callbackData = JSON.parse(xhr.responseText);
                        parsed = true;
                    } catch (e) {
                        callback(true, 'JSON returned was invalid, yet status code was 200. Data was: ' + xhr.responseText);
                    }
                    if (parsed) { // prevents double execution.
                        callback(false, callbackData);
                    }
                } else {
                    Centrifuge.log('Could not get auth info from application', xhr.status);
                    callback(true, xhr.status);
                }
            }
        };

        setTimeout(() => {
            xhr.send(JSON.stringify(data));
        }, 20);
        return xhr;
    }

    private _configure(config: ICentrifugeConfig): void {
        this._debug('Configuring Centrifuge with', config);
        config = Object.assign({
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
            refreshTransport: 'ajax',
            refreshAttempts: 0,
            refreshInterval: 3000,
            authEndpoint: '/centrifuge/auth/',
            authHeaders: {},
            authParams: {},
            authTransport: 'ajax',
        }, config);

        if (!config.url) {
            throw new Error('Missing required configuration parameter \'url\' specifying server URL');
        }
        config.url = stripSlash(config.url);

        if (!config.user) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'user\' specifying user\'s unique ID in your application');
            } else {
                this._debug('Configuration parameter \'user\' not found but this is OK for insecure mode - anonymous access will be used');
            }
        } else {
            if (!isString(config.user)) {
                Centrifuge.log('Configuration parameter \'user\' expected to be string');
            }
        }

        if (!config.timestamp) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'timestamp\'');
            } else {
                this._debug('Configuration parameter \'timestamp\' not found but this is OK for insecure mode');
            }
        } else {
            if (!isString(config.timestamp)) {
                Centrifuge.log('Configuration parameter \'timestamp\' expected to be string');
            }
        }

        if (!config.token) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'token\' specifying the sign of authorization request');
            } else {
                this._debug('Configuration parameter \'token\' not found but this is OK for insecure mode');
            }
        } else {
            if (!isString(config.token)) {
                Centrifuge.log('Configuration parameter \'token\' expected to be string');
            }
        }

        if (config.info && !isString(config.info)) {
            Centrifuge.log('Configuration parameter \'info\' expected to be string');
        }

        this._config = config;
    }

    private _getSockjsEndpoint(): string {
        let url = this._config.url;
        url = url
            .replace('ws://', 'http://')
            .replace('wss://', 'https://');
        url = stripSlash(url);
        if (!endsWith(this._config.url, 'connection')) {
            url = url + '/connection';
        }
        return url;
    }

    private _getWebsocketEndpoint(): string {
        let url = this._config.url;
        url = url
            .replace('http://', 'ws://')
            .replace('https://', 'wss://');
        url = stripSlash(url);
        if (!endsWith(this._config.url, 'connection/websocket')) {
            url = url + '/connection/websocket';
        }
        return url;
    }

    private _recover(channel: string): boolean {
        return channel in this._lastMessageID;
    }

    private _getLastID(channel: string): string {
        const lastUID = this._lastMessageID[channel];
        if (lastUID) {
            this._debug('Last uid found and sent for channel', channel);
            return lastUID;
        } else {
            this._debug('No last uid found for channel', channel);
            return '';
        }
    }

    private _getSub(channel: string): Subscription {
        return this._subs[channel] || null;
    }

    private _clearConnectedState(reconnect: boolean): void {
        this._clientID = null;

        // fire errbacks of registered calls.
        for (const uid in this._callbacks) {
            if (this._callbacks.hasOwnProperty(uid)) {
                const callbacks = this._callbacks[uid];
                const errback = callbacks.errback;
                if (!errback) {
                    continue;
                }
                errback(Centrifuge.createErrorObject('disconnected', 'retry'));
            }
        }
        this._callbacks = {};

        // fire unsubscribe events
        for (const channel in this._subs) {
            if (this._subs.hasOwnProperty(channel)) {
                const sub = this._getSub(channel);
                if (reconnect) {
                    if (sub.isSuccess()) {
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
            this._debug('Status:', this._status, '->', status);
            this._status = status;
        }
    }

    private _disconnect(reason: string, shouldReconnect: boolean = false): void {
        if (this.isDisconnected()) {
            return;
        }
        this._debug('Disconnected:', reason + '.', 'shouldReconnect:', shouldReconnect);

        if (shouldReconnect === false) {
            this._reconnect = false;
        }

        this._clearConnectedState(shouldReconnect);

        if (!this.isDisconnected()) {
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

    private _send(messages: ICentrifugeMessage[]): void {
        if (!messages.length) {
            return;
        }
        const _messages = messages.length === 1 ? messages[0] : messages;
        this._transport.send(JSON.stringify(_messages));
        this._debug('Send', _messages);
    }

    private _getNextMessageId(): number {
        return ++this._messageId;
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
        if (this._config.ping !== true || this._config.pingInterval <= 0 || !this.isConnected()) {
            return;
        }
        this._pingInterval = setInterval(() => {
            if (!this.isConnected()) {
                this._stopPing();
                return;
            }
            this.ping();
            this._pongTimeout = setTimeout(function () {
                this._disconnect('no ping', true);
            }, this._config.pongWaitTimeout);
        }, this._config.pingInterval);
    }

    private _restartPing(): void {
        this._stopPing();
        this._startPing();
    }

    private _resetRetry(): void {
        this._debug('Reset retries count to 0');
        this._retries = 0;
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
        if (!this.isDisconnected()) {
            this._disconnect('refresh failed');
        }
        if (this._config.refreshFailed) {
            this._config.refreshFailed();
        }
    }

    private _refresh(): void {
        // ask web app for connection parameters - user ID,
        // timestamp, info and token
        this._debug('Refresh credentials');

        if (this._config.refreshAttempts === 0) {
            this._debug('Refresh attempts set to 0, do not send refresh request at all');
            this._refreshFailed();
            return;
        }

        if (this._refreshTimeout !== null) {
            clearTimeout(this._refreshTimeout);
        }

        const cb = (err: boolean, data: ICentrifugeCredentials) => {
            if (err === true) {
                // We don't perform any connection status related actions here as we are
                // relying on Centrifugo that must close connection eventually.
                this._debug('Error getting connection credentials from refresh endpoint', data);
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
            this._config.timestamp = data.timestamp;
            this._config.token = data.token;
            if ('info' in data) {
                this._config.info = data.info;
            } else {
                data.info = '';
            }
            if (this.isDisconnected()) {
                this._debug('Credentials refreshed, connect from scratch');
                this.connect();
            } else {
                this._debug('Send refreshed credentials');
                this.addMessage(<ICentrifugeRefreshMessage>{
                    method: 'refresh',
                    params: data,
                }).then((response: ICentrifugeRefreshResponse) => {
                    this._refreshResponse(response);
                }, (error: ICentrifugeError) => {
                });
            }
        };

        if (this._config.onRefresh !== null) {
            this._config.onRefresh({}, cb);
        } else {
            const transport = this._config.refreshTransport.toLowerCase();
            if (transport === 'ajax') {
                this._ajax(
                    this._config.refreshEndpoint,
                    this._config.refreshParams,
                    this._config.refreshHeaders,
                    this._config.refreshData,
                    cb
                );
            } else if (transport === 'jsonp') {
                this._jsonp(
                    this._config.refreshEndpoint,
                    this._config.refreshParams,
                    this._config.refreshHeaders,
                    this._config.refreshData,
                    cb
                );
            } else {
                throw new Error('Unknown refresh transport ' + transport);
            }
        }
    }

    private _connectResponse(response: ICentrifugeConnectResponse): void {
        if (this.isConnected()) {
            return;
        }
        if (this._latencyStart !== null) {
            this._latency = (new Date()).getTime() - this._latencyStart.getTime();
            this._latencyStart = null;
        }
        if (response.expires) {
            if (response.expired) {
                this._reconnecting = true;
                this._disconnect('expired', true);
                this._refresh();
                return;
            }
        }
        this._clientID = response.client;
        this._setStatus('connected');

        if (this._refreshTimeout) {
            clearTimeout(this._refreshTimeout);
        }

        if (response.expires) {
            this._refreshTimeout = setTimeout(() => {
                this._refresh();
            }, response.ttl * 1000);
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
            version: response.version,
            client: response.client,
            transport: this._transportName,
            latency: this._latency
        }]);
    }

    private _subscribeResponse(response: ICentrifugeSubscribeResponse): void {
        const channel = response.channel;
        const sub = this._getSub(channel);
        if (!sub || !sub.isSubscribing()) {
            return;
        }
        let messages = response.messages;
        if (messages && messages.length > 0) {
            // handle missed messages
            messages = messages.reverse();
            for (const i in messages) {
                if (messages.hasOwnProperty(i)) {
                    this._messageResponse(<ICentrifugeMessage>{
                        body: messages[i]
                    });
                }
            }
        } else {
            if ('last' in response) {
                // no missed messages found so set last message id from body.
                this._lastMessageID[channel] = response.last;
            }
        }
        let recovered = false;
        if ('recovered' in response) {
            recovered = response.recovered;
        }
        sub.setSubscribeSuccess(recovered);
    }

    private _subscribeError(error: ICentrifugeError): void {
        const channel = error.channel;
        const sub = this._getSub(channel);
        if (!sub || !sub.isSubscribing()) {
            return;
        }
        this.trigger('error', [{
            error,
        }]);
        sub.setSubscribeError(error);
    }

    private _unsubscribeResponse(response: ICentrifugeUnsubscribeResponse): void {
        const sub = this._getSub(response.channel);
        if (!sub) {
            return;
        }
        sub.setUnsubscribed();
    }

    private _joinResponse(response: ICentrifugeJoinResponse): void {
        const sub = this._getSub(response.channel);
        if (!sub) {
            return;
        }
        sub.trigger('join', [response]);
    }

    private _leaveResponse(response: ICentrifugeLeaveResponse): void {
        const sub = this._getSub(response.channel);
        if (!sub) {
            return;
        }
        sub.trigger('leave', [response]);
    }

    private _refreshResponse(response: ICentrifugeRefreshResponse): void {
        if (this._refreshTimeout) {
            clearTimeout(this._refreshTimeout);
        }
        if (response.expires) {
            if (response.expired) {
                this._refreshTimeout = setTimeout(() => {
                    this._refresh();
                }, this._config.refreshInterval + Math.round(Math.random() * 1000));
                return;
            }
            this._clientID = response.client;
            this._refreshTimeout = setTimeout(() => {
                this._refresh();
            }, response.ttl * 1000);
        }
    }

    private _messageResponse(message: ICentrifugeMessage): void {
        const body = message.body;
        const channel = body.channel;

        // keep last uid received from channel.
        this._lastMessageID[channel] = body.uid;

        const sub = this._getSub(channel);
        if (!sub) {
            return;
        }
        sub.trigger('message', [body]);
    }

    private _handleResponse(message: ICentrifugeMessage): void {
        const uid = message.uid;
        if (!(uid in this._callbacks)) {
            return;
        }
        const callbacks = this._callbacks[uid];
        delete this._callbacks[uid];
        if (!errorExists(message)) {
            const callback = callbacks.callback;
            if (!callback) {
                return;
            }
            callback(message.body);
        } else {
            const errback = callbacks.errback;
            if (!errback) {
                return;
            }
            errback(Centrifuge.createErrorObject(message.error, message.advice));
            this.trigger('error', [{
                message,
            }]);
        }
    }

    private _dispatchMessage(message: any): void {
        if (message === undefined || message === null) {
            this._debug('Dispatch: got undefined or null message');
            return;
        }
        switch (message.method) {
            case 'join':
                this._joinResponse(message);
                break;
            case 'leave':
                this._leaveResponse(message);
                break;
            case 'message':
                this._messageResponse(message);
                break;
            default:
                this._handleResponse(message);
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
        if (isFunction(this._config.sockJS)) {
            const sockjsOptions: ISockJSOptions = {
                transports: this._config.transports || [
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
                ]
            };
            if (this._config.server) {
                sockjsOptions.server = this._config.server;
            }
            this._transport = new this._config.sockJS(this._getSockjsEndpoint(), null, sockjsOptions);
            this._isSockJS = true;
        } else {
            if (!isFunction(WebSocket)) {
                throw new Error('No Websocket support and no SockJS configured, can not connect');
            }
            this._transport = new WebSocket(this._getWebsocketEndpoint());
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

            this._resetRetry();

            const msg: ICentrifugeConnectMessage = {
                method: 'connect',
                params: {
                    user: this._config.user,
                    info: this._config.info,
                }
            };

            if (!this._config.insecure) {
                // in insecure client mode we don't need timestamp and token.
                msg.params.timestamp = this._config.timestamp;
                msg.params.token = this._config.token;
            }
            this._latencyStart = new Date();
            this.addMessage(msg).then((response: ICentrifugeConnectResponse) => {
                this._connectResponse(response);
            }, (error: ICentrifugeError) => {
            });
        };

        this._transport.onerror = (error: any) => {
            this._debug('Transport level error', error);
        };

        this._transport.onclose = (event: any) => {
            this._transportClosed = true;
            let reason = 'Connection closed';
            let reconnect = true;
            if (event && 'reason' in event && event.reason) {
                try {
                    const advice = JSON.parse(event.reason);
                    this._debug(reason + '. Reason is an advice object:', advice);
                    reason = advice.reason;
                    reconnect = advice.reconnect;
                } catch (e) {
                    reason = event.reason;
                    this._debug(reason + '. Reason is a plain string:', reason);
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
                this._debug('Reconnect after ' + interval + ' milliseconds');
                setTimeout(() => {
                    if (this._reconnect === true) {
                        this.connect();
                    }
                }, interval);
            }
        };

        this._transport.onmessage = (event: any) => {
            const data = JSON.parse(event.data);
            this._debug('Received', data);
            this._receive(data);
            this._restartPing();
        };
    }

}
