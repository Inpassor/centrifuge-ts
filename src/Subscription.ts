import {
    isFunction,
} from './Functions';
import {Observable} from 'js-observable';
import {Centrifuge} from './Centrifuge';
import {proto} from './Proto';

export class Subscription extends Observable {

    public channel: string = null;

    private _status = 'new';
    private _error: proto.IError = null;
    private _centrifuge: Centrifuge = null;
    private _isResubscribe = false;
    private _recovered = false;
    private _ready = false;
    private _noResubscribe = false;
    private _promise: Promise<any> = null;
    private _resolve: Function;
    private _reject: Function;

    constructor(centrifuge: Centrifuge, channel: string, events: any) {
        super();
        this._centrifuge = centrifuge;
        this.channel = channel;
        this.setEvents(events);
        this._initializePromise();
    }

    public get isUnsubscribed(): boolean {
        return this._status === 'unsubscribed';
    }

    public get isSuccess(): boolean {
        return this._status === 'success';
    }

    public get isSubscribing(): boolean {
        return this._status === 'subscribing';
    }

    public setEvents(events: any): void {
        if (!events) {
            return;
        }
        if (isFunction(events)) {
            this.on('message', events);
        } else if (Object.prototype.toString.call(events) === Object.prototype.toString.call({})) {
            const knownEvents = ['message', 'join', 'leave', 'unsubscribe', 'subscribe', 'error'];
            for (let i = 0, l = knownEvents.length; i < l; i++) {
                const ev = knownEvents[i];
                if (ev in events) {
                    this.on(ev, events[ev]);
                }
            }
        }
    }

    public setNew(): void {
        this._status = 'new';
    }

    public setSubscribing(): void {
        if (this._ready === true) {
            // new promise for this subscription
            this._initializePromise();
            this._isResubscribe = true;
        }
        this._status = 'subscribing';
    }

    public setUnsubscribed(noResubscribe?: boolean): void {
        if (this._status === 'unsubscribed') {
            return;
        }
        this._status = 'unsubscribed';
        if (noResubscribe === true) {
            this._noResubscribe = true;
        }
        this.triggerUnsubscribe();
    }

    public setSubscribeSuccess(recovered: boolean): void {
        if (this.isSuccess) {
            return;
        }
        this._recovered = recovered;
        this._status = 'success';
        const successContext = this._getSubscribeSuccess();
        this.trigger('subscribe', [successContext]);
        this._resolve(successContext);
    }

    public setSubscribeError(error: proto.IError): void {
        if (this._status === 'error') {
            return;
        }
        this._status = 'error';
        this._error = error;
        this.trigger('error', [error]);
        this._reject(error);
    }

    public triggerUnsubscribe(): void {
        this.trigger('unsubscribe', [{
            channel: this.channel
        }]);
    }

    public shouldResubscribe(): boolean {
        return !this._noResubscribe;
    }

    public ready(callback: Function, errback: Function) {
        if (this._ready) {
            if (this.isSuccess) {
                callback(this._getSubscribeSuccess());
            } else {
                errback(this._error);
            }
        }
    }

    public subscribe(): this {
        if (this.isSuccess) {
            return;
        }
        this._centrifuge.subscribeSub(this);
        return this;
    }

    public unsubscribe(): void {
        this.setUnsubscribed(true);
        this._centrifuge.unsubscribeSub(this);
    }

    public publish(data: any): Promise<any> {
        if (this._centrifuge.isProtobufFormat && !(data instanceof Uint8Array)) {
            throw new Error('Illegal argument type: data must be a Uint8Array');
        }
        return this._request(proto.MethodType.PUBLISH, data);
    }

    public presence(): Promise<any> {
        return this._request(proto.MethodType.PRESENCE);
    }

    public history(): Promise<any> {
        return this._request(proto.MethodType.HISTORY);
    }

    private _initializePromise(): void {
        this._ready = false;
        this._promise = new Promise((resolve: Function, reject: Function) => {
            this._resolve = (value: any) => {
                this._ready = true;
                resolve(value);
            };
            this._reject = (err: any) => {
                this._ready = true;
                reject(err);
            };
        });
    }

    private _getSubscribeSuccess(): Object {
        return {
            channel: this.channel,
            isResubscribe: this._isResubscribe,
            recovered: this._recovered
        };
    }

    private _request(method: number, data?: any): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            if (this.isUnsubscribed) {
                reject({
                    message: 'Subscription unsubscribed',
                });
                return;
            }
            this._promise.then(() => {
                if (!this._centrifuge.isConnected) {
                    reject({
                        message: 'Disconnected',
                    });
                    return;
                }
                const params = {
                    channel: this.channel,
                };
                if (data) {
                    params['data'] = data;
                }
                this._centrifuge.addCommand({
                    method,
                    params: <any> params,
                }).then((result: any) => {
                    switch (method) {
                        case proto.MethodType.PUBLISH:
                            result = this._centrifuge.decodeResult(result, proto.PublishResult);
                            break;
                        case proto.MethodType.PRESENCE:
                            result = this._centrifuge.decodeResult(result, proto.PresenceResult);
                            break;
                        case proto.MethodType.HISTORY:
                            result = this._centrifuge.decodeResult(result, proto.HistoryResult);
                            break;
                    }
                    resolve(result);
                }, (error: proto.IError) => {
                    reject(error);
                });
            }, (err: any) => {
                reject(err);
            });
        });
    }

}
