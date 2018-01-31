(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Centrifuge", function() { return Centrifuge; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Functions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscription__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Centrifuge = (function (_super) {
    __extends(Centrifuge, _super);
    function Centrifuge(config) {
        var _this = _super.call(this) || this;
        _this._config = {};
        _this._status = 'disconnected';
        _this._isSockJS = false;
        _this._transport = null;
        _this._transportName = null;
        _this._transportClosed = true;
        _this._reconnect = true;
        _this._reconnecting = false;
        _this._numRefreshFailed = 0;
        _this._refreshTimeout = null;
        _this._pongTimeout = null;
        _this._pingInterval = null;
        _this._messageId = 0;
        _this._messages = [];
        _this._isBatching = false;
        _this._isAuthBatching = false;
        _this._authChannels = {};
        _this._clientID = null;
        _this._callbacks = {};
        _this._subs = {};
        _this._retries = 0;
        _this._latency = null;
        _this._latencyStart = null;
        _this._lastMessageID = {};
        _this._configure(config);
        return _this;
    }
    Centrifuge.prototype.connect = function () {
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
    };
    Centrifuge.prototype.disconnect = function () {
        this._disconnect('client');
    };
    Centrifuge.prototype.isConnected = function () {
        return this._status === 'connected';
    };
    Centrifuge.prototype.isDisconnected = function () {
        return this._status === 'disconnected';
    };
    Centrifuge.prototype.ping = function () {
        this.addMessage({
            method: 'ping'
        }).then(function (response) {
        }, function (error) {
        });
    };
    Centrifuge.prototype.startBatching = function () {
        this._isBatching = true;
    };
    Centrifuge.prototype.stopBatching = function (flush) {
        if (flush === void 0) { flush = false; }
        this._isBatching = false;
        if (flush === true) {
            this.flush();
        }
    };
    Centrifuge.prototype.flush = function () {
        var messages = this._messages.slice(0);
        this._messages = [];
        this._send(messages);
    };
    Centrifuge.prototype.startAuthBatching = function () {
        this._isAuthBatching = true;
    };
    Centrifuge.prototype.stopAuthBatching = function () {
        var _this = this;
        var i;
        var channel;
        this._isAuthBatching = false;
        var authChannels = this._authChannels;
        this._authChannels = {};
        var channels = [];
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
        var cb = function (err, _data) {
            if (err === true) {
                _this._debug('Authorization request failed');
                for (i in channels) {
                    if (channels.hasOwnProperty(i)) {
                        channel = channels[i];
                        _this._subscribeError({
                            error: 'authorization request failed',
                            advice: 'fix',
                            body: {
                                channel: channel,
                            }
                        });
                    }
                }
                return;
            }
            var batch = false;
            if (!_this._isBatching) {
                _this.startBatching();
                batch = true;
            }
            for (i in channels) {
                if (channels.hasOwnProperty(i)) {
                    channel = channels[i];
                    var channelResponse = _data[channel];
                    if (!channelResponse) {
                        _this._subscribeError({
                            error: 'channel not found in authorization response',
                            advice: 'fix',
                            body: {
                                channel: channel,
                            }
                        });
                        continue;
                    }
                    if (!channelResponse.status || channelResponse.status === 200) {
                        var msg = {
                            method: 'subscribe',
                            params: {
                                channel: channel,
                                client: _this.getClientId(),
                                info: channelResponse.info,
                                sign: channelResponse.sign
                            }
                        };
                        if (_this._recover(channel) === true) {
                            msg.params.recover = true;
                            msg.params.last = _this._getLastID(channel);
                        }
                        _this.addMessage(msg).then(function (response) {
                            _this._subscribeResponse(response);
                        }, function (error) {
                        });
                    }
                    else {
                        _this._subscribeError({
                            error: channelResponse.status,
                            body: {
                                channel: channel
                            }
                        });
                    }
                }
            }
            if (batch) {
                _this.stopBatching(true);
            }
        };
        var data = {
            client: this.getClientId(),
            channels: channels,
        };
        if (Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["c" /* isFunction */])(this._config.onPrivateChannelAuth)) {
            this._config.onPrivateChannelAuth({
                data: data,
            }, cb);
        }
        else {
            var transport = this._config.authTransport.toLowerCase();
            if (transport === 'ajax') {
                this._ajax(this._config.authEndpoint, this._config.authParams, this._config.authHeaders, data, cb);
            }
            else if (transport === 'jsonp') {
                this._jsonp(this._config.authEndpoint, this._config.authParams, this._config.authHeaders, data, cb);
            }
            else {
                throw new Error('Unknown private channel auth transport ' + transport);
            }
        }
    };
    Centrifuge.prototype.subscribe = function (channel, events) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["d" /* isString */])(channel)) {
            throw new Error('Illegal argument type: channel must be a string');
        }
        if (!this._config.resubscribe && !this.isConnected()) {
            throw new Error('Can not only subscribe in connected state when resubscribe option is off');
        }
        var currentSub = this._getSub(channel);
        if (currentSub !== null) {
            currentSub.setEvents(events);
            if (currentSub.isUnsubscribed()) {
                currentSub.subscribe();
            }
            return currentSub;
        }
        else {
            var sub = new __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */](this, channel, events);
            this._subs[channel] = sub;
            sub.subscribe();
            return sub;
        }
    };
    Centrifuge.prototype.subscribeSub = function (sub) {
        var _this = this;
        var channel = sub.channel;
        if (!(channel in this._subs)) {
            this._subs[channel] = sub;
        }
        if (!this.isConnected()) {
            sub.setNew();
            return;
        }
        sub.setSubscribing();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["g" /* startsWith */])(channel, this._config.privateChannelPrefix)) {
            if (this._isAuthBatching) {
                this._authChannels[channel] = true;
            }
            else {
                this.startAuthBatching();
                this.subscribeSub(sub);
                this.stopAuthBatching();
            }
        }
        else {
            var msg = {
                method: 'subscribe',
                params: {
                    channel: channel,
                }
            };
            if (this._recover(channel) === true) {
                msg.params.recover = true;
                msg.params.last = this._getLastID(channel);
            }
            this.addMessage(msg).then(function (response) {
                _this._subscribeResponse(response);
            }, function (error) {
                _this._subscribeError(error);
            });
        }
    };
    Centrifuge.prototype.unsubscribeSub = function (sub) {
        var _this = this;
        if (this.isConnected()) {
            this.addMessage({
                method: 'unsubscribe',
                params: {
                    channel: sub.channel
                }
            }).then(function (response) {
                _this._unsubscribeResponse(response);
            }, function (error) {
            });
        }
    };
    Centrifuge.prototype.getClientId = function () {
        return this._clientID;
    };
    Centrifuge.prototype.registerCall = function (uid, callback, errback) {
        var _this = this;
        this._callbacks[uid] = {
            callback: callback,
            errback: errback
        };
        setTimeout(function () {
            delete _this._callbacks[uid];
            if (Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["c" /* isFunction */])(errback)) {
                errback(Centrifuge.createErrorObject('timeout', 'retry'));
            }
        }, this._config.timeout);
    };
    Centrifuge.prototype.addMessage = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var uid = _this._getNextMessageId() + '';
            message.uid = uid;
            if (_this._isBatching === true) {
                _this._messages.push(message);
            }
            else {
                _this._send([message]);
            }
            _this.registerCall(uid, resolve, reject);
        });
    };
    Centrifuge.createErrorObject = function (error, advice) {
        var result = {
            error: error,
        };
        if (advice) {
            result.advice = advice;
        }
        return result;
    };
    Centrifuge.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["e" /* log */])('info', args);
    };
    Centrifuge.prototype._debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._config.debug === true) {
            Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["e" /* log */])('debug', args);
        }
    };
    Centrifuge.prototype._jsonp = function (url, params, headers, data, callback) {
        if (Object.keys(headers).length > 0) {
            Centrifuge.log('Only AJAX request allows to send custom headers, it is not possible with JSONP.');
        }
        this._debug('Sending JSONP request to', url);
        var callbackName = 'centrifuge_jsonp_' + Centrifuge.nextJSONPCallbackID.toString();
        Centrifuge.nextJSONPCallbackID++;
        var script = document.createElement('script');
        var timeoutTrigger = setTimeout(function () {
            Centrifuge.jsonpCallbacks[callbackName] = function () {
            };
            callback(true, 'timeout');
        }, 3000);
        Centrifuge.jsonpCallbacks[callbackName] = function (callbackData) {
            clearTimeout(timeoutTrigger);
            callback(false, callbackData);
            delete Centrifuge.jsonpCallbacks[callbackName];
        };
        var callback_name = 'Centrifuge._jsonpCallbacks[\'' + callbackName + '\']';
        script.src = this._config.authEndpoint +
            '?callback=' + encodeURIComponent(callback_name) +
            '&data=' + encodeURIComponent(JSON.stringify(data)) +
            '&' + Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["f" /* objectToQuery */])(params);
        var head = document.getElementsByTagName('head')[0] || document.documentElement;
        head.insertBefore(script, head.firstChild);
    };
    Centrifuge.prototype._ajax = function (url, params, headers, data, callback) {
        this._debug('Sending AJAX request to', url);
        var xhr = (XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'));
        var query = Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["f" /* objectToQuery */])(params);
        if (query.length > 0) {
            query = '?' + query;
        }
        xhr.open('POST', url + query, true);
        if ('withCredentials' in xhr) {
            xhr.withCredentials = true;
        }
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Content-Type', 'application/json');
        for (var headerName in headers) {
            if (headers.hasOwnProperty(headerName)) {
                xhr.setRequestHeader(headerName, headers[headerName]);
            }
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var callbackData = void 0, parsed = false;
                    try {
                        callbackData = JSON.parse(xhr.responseText);
                        parsed = true;
                    }
                    catch (e) {
                        callback(true, 'JSON returned was invalid, yet status code was 200. Data was: ' + xhr.responseText);
                    }
                    if (parsed) {
                        callback(false, callbackData);
                    }
                }
                else {
                    Centrifuge.log('Could not get auth info from application', xhr.status);
                    callback(true, xhr.status);
                }
            }
        };
        setTimeout(function () {
            xhr.send(JSON.stringify(data));
        }, 20);
        return xhr;
    };
    Centrifuge.prototype._configure = function (config) {
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
        config.url = Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["h" /* stripSlash */])(config.url);
        if (!config.user) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'user\' specifying user\'s unique ID in your application');
            }
            else {
                this._debug('Configuration parameter \'user\' not found but this is OK for insecure mode - anonymous access will be used');
            }
        }
        else {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["d" /* isString */])(config.user)) {
                Centrifuge.log('Configuration parameter \'user\' expected to be string');
            }
        }
        if (!config.timestamp) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'timestamp\'');
            }
            else {
                this._debug('Configuration parameter \'timestamp\' not found but this is OK for insecure mode');
            }
        }
        else {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["d" /* isString */])(config.timestamp)) {
                Centrifuge.log('Configuration parameter \'timestamp\' expected to be string');
            }
        }
        if (!config.token) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'token\' specifying the sign of authorization request');
            }
            else {
                this._debug('Configuration parameter \'token\' not found but this is OK for insecure mode');
            }
        }
        else {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["d" /* isString */])(config.token)) {
                Centrifuge.log('Configuration parameter \'token\' expected to be string');
            }
        }
        if (config.info && !Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["d" /* isString */])(config.info)) {
            Centrifuge.log('Configuration parameter \'info\' expected to be string');
        }
        this._config = config;
    };
    Centrifuge.prototype._getSockjsEndpoint = function () {
        var url = this._config.url;
        url = url
            .replace('ws://', 'http://')
            .replace('wss://', 'https://');
        url = Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["h" /* stripSlash */])(url);
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["a" /* endsWith */])(this._config.url, 'connection')) {
            url = url + '/connection';
        }
        return url;
    };
    Centrifuge.prototype._getWebsocketEndpoint = function () {
        var url = this._config.url;
        url = url
            .replace('http://', 'ws://')
            .replace('https://', 'wss://');
        url = Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["h" /* stripSlash */])(url);
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["a" /* endsWith */])(this._config.url, 'connection/websocket')) {
            url = url + '/connection/websocket';
        }
        return url;
    };
    Centrifuge.prototype._recover = function (channel) {
        return channel in this._lastMessageID;
    };
    Centrifuge.prototype._getLastID = function (channel) {
        var lastUID = this._lastMessageID[channel];
        if (lastUID) {
            this._debug('Last uid found and sent for channel', channel);
            return lastUID;
        }
        else {
            this._debug('No last uid found for channel', channel);
            return '';
        }
    };
    Centrifuge.prototype._getSub = function (channel) {
        return this._subs[channel] || null;
    };
    Centrifuge.prototype._clearConnectedState = function (reconnect) {
        this._clientID = null;
        for (var uid in this._callbacks) {
            if (this._callbacks.hasOwnProperty(uid)) {
                var callbacks = this._callbacks[uid];
                var errback = callbacks.errback;
                if (!errback) {
                    continue;
                }
                errback(Centrifuge.createErrorObject('disconnected', 'retry'));
            }
        }
        this._callbacks = {};
        for (var channel in this._subs) {
            if (this._subs.hasOwnProperty(channel)) {
                var sub = this._getSub(channel);
                if (reconnect) {
                    if (sub.isSuccess()) {
                        sub.triggerUnsubscribe();
                    }
                    sub.setSubscribing();
                }
                else {
                    sub.setUnsubscribed();
                }
            }
        }
        if (!this._config.resubscribe || !this._reconnect) {
            this._subs = {};
        }
    };
    Centrifuge.prototype._setStatus = function (status) {
        if (this._status !== status) {
            this._debug('Status:', this._status, '->', status);
            this._status = status;
        }
    };
    Centrifuge.prototype._disconnect = function (reason, shouldReconnect) {
        if (shouldReconnect === void 0) { shouldReconnect = false; }
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
                        reason: reason,
                        reconnect: shouldReconnect,
                    }]);
            }
        }
        if (!this._transportClosed) {
            this._transport.close();
        }
    };
    Centrifuge.prototype._send = function (messages) {
        if (!messages.length) {
            return;
        }
        var _messages = messages.length === 1 ? messages[0] : messages;
        this._transport.send(JSON.stringify(_messages));
        this._debug('Send', _messages);
    };
    Centrifuge.prototype._getNextMessageId = function () {
        return ++this._messageId;
    };
    Centrifuge.prototype._stopPing = function () {
        if (this._pongTimeout !== null) {
            clearTimeout(this._pongTimeout);
        }
        if (this._pingInterval !== null) {
            clearInterval(this._pingInterval);
        }
    };
    Centrifuge.prototype._startPing = function () {
        var _this = this;
        if (this._config.ping !== true || this._config.pingInterval <= 0 || !this.isConnected()) {
            return;
        }
        this._pingInterval = setInterval(function () {
            if (!_this.isConnected()) {
                _this._stopPing();
                return;
            }
            _this.ping();
            _this._pongTimeout = setTimeout(function () {
                this._disconnect('no ping', true);
            }, _this._config.pongWaitTimeout);
        }, this._config.pingInterval);
    };
    Centrifuge.prototype._restartPing = function () {
        this._stopPing();
        this._startPing();
    };
    Centrifuge.prototype._resetRetry = function () {
        this._debug('Reset retries count to 0');
        this._retries = 0;
    };
    Centrifuge.prototype._getRetryInterval = function () {
        this._retries += 1;
        var jitter = 0.5 * Math.random();
        var interval = this._config.retry * Math.pow(2, this._retries + 1);
        if (interval > this._config.maxRetry) {
            interval = this._config.maxRetry;
        }
        return Math.floor((1 - jitter) * interval);
    };
    Centrifuge.prototype._refreshFailed = function () {
        this._numRefreshFailed = 0;
        if (!this.isDisconnected()) {
            this._disconnect('refresh failed');
        }
        if (this._config.refreshFailed) {
            this._config.refreshFailed();
        }
    };
    Centrifuge.prototype._refresh = function () {
        var _this = this;
        this._debug('Refresh credentials');
        if (this._config.refreshAttempts === 0) {
            this._debug('Refresh attempts set to 0, do not send refresh request at all');
            this._refreshFailed();
            return;
        }
        if (this._refreshTimeout !== null) {
            clearTimeout(this._refreshTimeout);
        }
        var cb = function (err, data) {
            if (err === true) {
                _this._debug('Error getting connection credentials from refresh endpoint', data);
                _this._numRefreshFailed++;
                if (_this._refreshTimeout) {
                    clearTimeout(_this._refreshTimeout);
                }
                if (_this._config.refreshAttempts !== null && _this._numRefreshFailed >= _this._config.refreshAttempts) {
                    _this._refreshFailed();
                    return;
                }
                _this._refreshTimeout = setTimeout(function () {
                    _this._refresh();
                }, _this._config.refreshInterval + Math.round(Math.random() * 1000));
                return;
            }
            _this._numRefreshFailed = 0;
            _this._config.user = data.user;
            _this._config.timestamp = data.timestamp;
            _this._config.token = data.token;
            if ('info' in data) {
                _this._config.info = data.info;
            }
            else {
                data.info = '';
            }
            if (_this.isDisconnected()) {
                _this._debug('Credentials refreshed, connect from scratch');
                _this.connect();
            }
            else {
                _this._debug('Send refreshed credentials');
                _this.addMessage({
                    method: 'refresh',
                    params: data,
                }).then(function (response) {
                    _this._refreshResponse(response);
                }, function (error) {
                });
            }
        };
        if (this._config.onRefresh !== null) {
            this._config.onRefresh({}, cb);
        }
        else {
            var transport = this._config.refreshTransport.toLowerCase();
            if (transport === 'ajax') {
                this._ajax(this._config.refreshEndpoint, this._config.refreshParams, this._config.refreshHeaders, this._config.refreshData, cb);
            }
            else if (transport === 'jsonp') {
                this._jsonp(this._config.refreshEndpoint, this._config.refreshParams, this._config.refreshHeaders, this._config.refreshData, cb);
            }
            else {
                throw new Error('Unknown refresh transport ' + transport);
            }
        }
    };
    Centrifuge.prototype._connectResponse = function (response) {
        var _this = this;
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
            this._refreshTimeout = setTimeout(function () {
                _this._refresh();
            }, response.ttl * 1000);
        }
        if (this._config.resubscribe) {
            this.startBatching();
            this.startAuthBatching();
            for (var channel in this._subs) {
                if (this._subs.hasOwnProperty(channel)) {
                    var sub = this._getSub(channel);
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
    };
    Centrifuge.prototype._subscribeResponse = function (response) {
        var channel = response.channel;
        var sub = this._getSub(channel);
        if (!sub || !sub.isSubscribing()) {
            return;
        }
        var messages = response.messages;
        if (messages && messages.length > 0) {
            messages = messages.reverse();
            for (var i in messages) {
                if (messages.hasOwnProperty(i)) {
                    this._messageResponse({
                        body: messages[i]
                    });
                }
            }
        }
        else {
            if ('last' in response) {
                this._lastMessageID[channel] = response.last;
            }
        }
        var recovered = false;
        if ('recovered' in response) {
            recovered = response.recovered;
        }
        sub.setSubscribeSuccess(recovered);
    };
    Centrifuge.prototype._subscribeError = function (error) {
        var channel = error.channel;
        var sub = this._getSub(channel);
        if (!sub || !sub.isSubscribing()) {
            return;
        }
        this.trigger('error', [{
                error: error,
            }]);
        sub.setSubscribeError(error);
    };
    Centrifuge.prototype._unsubscribeResponse = function (response) {
        var sub = this._getSub(response.channel);
        if (!sub) {
            return;
        }
        sub.setUnsubscribed();
    };
    Centrifuge.prototype._joinResponse = function (response) {
        var sub = this._getSub(response.channel);
        if (!sub) {
            return;
        }
        sub.trigger('join', [response]);
    };
    Centrifuge.prototype._leaveResponse = function (response) {
        var sub = this._getSub(response.channel);
        if (!sub) {
            return;
        }
        sub.trigger('leave', [response]);
    };
    Centrifuge.prototype._refreshResponse = function (response) {
        var _this = this;
        if (this._refreshTimeout) {
            clearTimeout(this._refreshTimeout);
        }
        if (response.expires) {
            if (response.expired) {
                this._refreshTimeout = setTimeout(function () {
                    _this._refresh();
                }, this._config.refreshInterval + Math.round(Math.random() * 1000));
                return;
            }
            this._clientID = response.client;
            this._refreshTimeout = setTimeout(function () {
                _this._refresh();
            }, response.ttl * 1000);
        }
    };
    Centrifuge.prototype._messageResponse = function (message) {
        var body = message.body;
        var channel = body.channel;
        this._lastMessageID[channel] = body.uid;
        var sub = this._getSub(channel);
        if (!sub) {
            return;
        }
        sub.trigger('message', [body]);
    };
    Centrifuge.prototype._handleResponse = function (message) {
        var uid = message.uid;
        if (!(uid in this._callbacks)) {
            return;
        }
        var callbacks = this._callbacks[uid];
        delete this._callbacks[uid];
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["b" /* errorExists */])(message)) {
            var callback = callbacks.callback;
            if (!callback) {
                return;
            }
            callback(message.body);
        }
        else {
            var errback = callbacks.errback;
            if (!errback) {
                return;
            }
            errback(Centrifuge.createErrorObject(message.error, message.advice));
            this.trigger('error', [{
                    message: message,
                }]);
        }
    };
    Centrifuge.prototype._dispatchMessage = function (message) {
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
    };
    Centrifuge.prototype._receive = function (data) {
        if (Object.prototype.toString.call(data) === Object.prototype.toString.call([])) {
            for (var i in data) {
                if (data.hasOwnProperty(i)) {
                    this._dispatchMessage(data[i]);
                }
            }
        }
        else if (Object.prototype.toString.call(data) === Object.prototype.toString.call({})) {
            this._dispatchMessage(data);
        }
    };
    Centrifuge.prototype._setTransport = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["c" /* isFunction */])(this._config.sockJS)) {
            var sockjsOptions = {
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
        }
        else {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["c" /* isFunction */])(WebSocket)) {
                throw new Error('No Websocket support and no SockJS configured, can not connect');
            }
            this._transport = new WebSocket(this._getWebsocketEndpoint());
        }
        this._transport.onopen = function () {
            _this._transportClosed = false;
            _this._reconnecting = false;
            if (_this._isSockJS) {
                _this._transportName = _this._transport.transport;
                _this._transport.onheartbeat = function () {
                    _this._restartPing();
                };
            }
            else {
                _this._transportName = 'raw-websocket';
            }
            _this._resetRetry();
            var msg = {
                method: 'connect',
                params: {
                    user: _this._config.user,
                    info: _this._config.info,
                }
            };
            if (!_this._config.insecure) {
                msg.params.timestamp = _this._config.timestamp;
                msg.params.token = _this._config.token;
            }
            _this._latencyStart = new Date();
            _this.addMessage(msg).then(function (response) {
                _this._connectResponse(response);
            }, function (error) {
            });
        };
        this._transport.onerror = function (error) {
            _this._debug('Transport level error', error);
        };
        this._transport.onclose = function (event) {
            _this._transportClosed = true;
            var reason = 'Connection closed';
            var reconnect = true;
            if (event && 'reason' in event && event.reason) {
                try {
                    var advice = JSON.parse(event.reason);
                    _this._debug(reason + '. Reason is an advice object:', advice);
                    reason = advice.reason;
                    reconnect = advice.reconnect;
                }
                catch (e) {
                    reason = event.reason;
                    _this._debug(reason + '. Reason is a plain string:', reason);
                    reconnect = reason !== 'disconnect';
                }
            }
            if (_this._config.onTransportClose) {
                _this._config.onTransportClose({
                    event: event,
                    reason: reason,
                    reconnect: reconnect,
                });
            }
            _this._disconnect(reason, reconnect);
            if (_this._reconnect === true) {
                _this._reconnecting = true;
                var interval = _this._getRetryInterval();
                _this._debug('Reconnect after ' + interval + ' milliseconds');
                setTimeout(function () {
                    if (_this._reconnect === true) {
                        _this.connect();
                    }
                }, interval);
            }
        };
        this._transport.onmessage = function (event) {
            var data = JSON.parse(event.data);
            _this._debug('Received', data);
            _this._receive(data);
            _this._restartPing();
        };
    };
    Centrifuge.jsonpCallbacks = {};
    Centrifuge.nextJSONPCallbackID = 1;
    return Centrifuge;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return stripSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return objectToQuery; });
var isFunction = function (value) {
    return typeof value === 'function';
};
var isString = function (value) {
    return typeof value === 'string';
};
var log = function (level) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (console) {
        if (args.length === 1) {
            args = args[0];
        }
        var logger = console[level];
        if (isFunction(logger)) {
            logger.apply(logger, args);
        }
    }
};
var stripSlash = function (value) {
    return value.replace(/\/$/, '');
};
var startsWith = function (value, prefix) {
    return value.lastIndexOf(prefix, 0) === 0;
};
var endsWith = function (value, suffix) {
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
};
var errorExists = function (data) {
    return 'error' in data && data.error !== null && data.error !== '';
};
var objectToQuery = function (object) {
    var p = [];
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            p.push(encodeURIComponent(i) + (object[i] ? '=' + encodeURIComponent(object[i]) : ''));
        }
    }
    return p.join('&');
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observable; });
var Observable = (function () {
    function Observable() {
        this.__callbacks = {};
    }
    Observable.prototype.on = function (events, fn) {
        var _this = this;
        events.replace(/[^\s]+/g, function (name) {
            (_this.__callbacks[name] = _this.__callbacks[name] || []).push(fn);
            return '';
        });
        return this;
    };
    Observable.prototype.one = function (name, fn) {
        fn['one'] = true;
        return this.on(name, fn);
    };
    Observable.prototype.off = function (events, fn) {
        var _this = this;
        if (events === '*') {
            this.__callbacks = {};
        }
        else if (fn) {
            var arr = this.__callbacks[events];
            for (var i = 0, cb = void 0; (cb = arr && arr[i]); ++i) {
                if (cb === fn) {
                    arr.splice(i, 1);
                }
            }
        }
        else {
            events.replace(/[^\s]+/g, function (name) {
                _this.__callbacks[name] = [];
                return '';
            });
        }
        return this;
    };
    Observable.prototype.trigger = function (name, args) {
        var fns = this.__callbacks[name] || [];
        for (var i = 0, fn = void 0; (fn = fns[i]); ++i) {
            if (!fn['busy']) {
                fn['busy'] = true;
                fn.apply(this, args);
                if (fn['one']) {
                    fns.splice(i, 1);
                    i--;
                }
                fn['busy'] = false;
            }
        }
        return this;
    };
    return Observable;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Functions__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Centrifuge__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Subscription = (function (_super) {
    __extends(Subscription, _super);
    function Subscription(centrifuge, channel, events) {
        var _this = _super.call(this) || this;
        _this.channel = null;
        _this._status = Subscription.STATE_NEW;
        _this._error = null;
        _this._centrifuge = null;
        _this._isResubscribe = false;
        _this._recovered = false;
        _this._ready = false;
        _this._promise = null;
        _this._noResubscribe = false;
        _this._centrifuge = centrifuge;
        _this.channel = channel;
        _this.setEvents(events);
        _this._initializePromise();
        return _this;
    }
    Subscription.prototype.setEvents = function (events) {
        if (!events) {
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0__Functions__["c" /* isFunction */])(events)) {
            this.on('message', events);
        }
        else if (Object.prototype.toString.call(events) === Object.prototype.toString.call({})) {
            var knownEvents = ['message', 'join', 'leave', 'unsubscribe', 'subscribe', 'error'];
            for (var i = 0, l = knownEvents.length; i < l; i++) {
                var ev = knownEvents[i];
                if (ev in events) {
                    this.on(ev, events[ev]);
                }
            }
        }
    };
    Subscription.prototype.setNew = function () {
        this._status = Subscription.STATE_NEW;
    };
    Subscription.prototype.setSubscribing = function () {
        if (this._ready === true) {
            this._initializePromise();
            this._isResubscribe = true;
        }
        this._status = Subscription.STATE_SUBSCRIBING;
    };
    Subscription.prototype.setUnsubscribed = function (noResubscribe) {
        if (this._status === Subscription.STATE_UNSUBSCRIBED) {
            return;
        }
        this._status = Subscription.STATE_UNSUBSCRIBED;
        if (noResubscribe === true) {
            this._noResubscribe = true;
        }
        this.triggerUnsubscribe();
    };
    Subscription.prototype.setSubscribeSuccess = function (recovered) {
        if (this._status === Subscription.STATE_SUCCESS) {
            return;
        }
        this._recovered = recovered;
        this._status = Subscription.STATE_SUCCESS;
        var successContext = this._getSubscribeSuccess();
        this.trigger('subscribe', [successContext]);
        this._resolve(successContext);
    };
    Subscription.prototype.setSubscribeError = function (error) {
        if (this._status === Subscription.STATE_ERROR) {
            return;
        }
        this._status = Subscription.STATE_ERROR;
        this._error = error;
        var errContext = this._getSubscribeError();
        this.trigger('error', [errContext]);
        this._reject(errContext);
    };
    Subscription.prototype.triggerUnsubscribe = function () {
        this.trigger('unsubscribe', [{
                channel: this.channel
            }]);
    };
    Subscription.prototype.isUnsubscribed = function () {
        return this._status === Subscription.STATE_UNSUBSCRIBED;
    };
    Subscription.prototype.isSuccess = function () {
        return this._status === Subscription.STATE_SUCCESS;
    };
    Subscription.prototype.isSubscribing = function () {
        return this._status === Subscription.STATE_SUBSCRIBING;
    };
    Subscription.prototype.shouldResubscribe = function () {
        return !this._noResubscribe;
    };
    Subscription.prototype.ready = function (callback, errback) {
        if (this._ready) {
            if (this.isSuccess()) {
                callback(this._getSubscribeSuccess());
            }
            else {
                errback(this._getSubscribeError());
            }
        }
    };
    Subscription.prototype.subscribe = function () {
        if (this._status === Subscription.STATE_SUCCESS) {
            return;
        }
        this._centrifuge.subscribeSub(this);
        return this;
    };
    Subscription.prototype.unsubscribe = function () {
        this.setUnsubscribed(true);
        this._centrifuge.unsubscribeSub(this);
    };
    Subscription.prototype.publish = function (data) {
        return this._request('publish', data);
    };
    Subscription.prototype.presence = function () {
        return this._request('presence');
    };
    Subscription.prototype.history = function () {
        return this._request('history');
    };
    Subscription.prototype._initializePromise = function () {
        var _this = this;
        this._ready = false;
        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = function (value) {
                _this._ready = true;
                resolve(value);
            };
            _this._reject = function (err) {
                _this._ready = true;
                reject(err);
            };
        });
    };
    Subscription.prototype._getSubscribeSuccess = function () {
        return {
            channel: this.channel,
            isResubscribe: this._isResubscribe,
            recovered: this._recovered
        };
    };
    Subscription.prototype._getSubscribeError = function () {
        var subscribeError = this._error;
        subscribeError.channel = this.channel;
        subscribeError.isResubscribe = this._isResubscribe;
        return subscribeError;
    };
    Subscription.prototype._request = function (method, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isUnsubscribed()) {
                reject(__WEBPACK_IMPORTED_MODULE_2__Centrifuge__["Centrifuge"].createErrorObject('subscription unsubscribed', 'fix'));
                return;
            }
            _this._promise.then(function () {
                if (!_this._centrifuge.isConnected()) {
                    reject(__WEBPACK_IMPORTED_MODULE_2__Centrifuge__["Centrifuge"].createErrorObject('disconnected', 'retry'));
                    return;
                }
                var params = {
                    channel: _this.channel,
                };
                if (data) {
                    params['data'] = data;
                }
                _this._centrifuge.addMessage({
                    method: method,
                    params: params,
                }).then(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    Subscription.STATE_NEW = 0;
    Subscription.STATE_SUBSCRIBING = 1;
    Subscription.STATE_SUCCESS = 2;
    Subscription.STATE_ERROR = 3;
    Subscription.STATE_UNSUBSCRIBED = 4;
    return Subscription;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));



/***/ })
/******/ ]);
});