import {
    isFunction,
} from './Functions';
import {Observable} from './Observable';
import {Centrifuge} from './Centrifuge';
import {
    ICentrifugeMessage,
    ICentrifugeError,
    ISubscriptionMessage,
    ISubscriptionSuccess,
} from './interfaces';

export class Subscription extends Observable {

    public static STATE_NEW: number = 0;
    public static STATE_SUBSCRIBING: number = 1;
    public static STATE_SUCCESS: number = 2;
    public static STATE_ERROR: number = 3;
    public static STATE_UNSUBSCRIBED: number = 4;

    public channel: string = null;

    private _status: number = Subscription.STATE_NEW;
    private _error: ICentrifugeError = null;
    private _centrifuge: Centrifuge = null;
    private _isResubscribe: boolean = false;
    private _recovered: boolean = false;
    private _ready: boolean = false;
    private _promise: Promise<any> = null;
    private _noResubscribe: boolean = false;
    private _resolve: Function;
    private _reject: Function;

    constructor(centrifuge: Centrifuge, channel: string, events: any) {
        super();
        this._centrifuge = centrifuge;
        this.channel = channel;
        this.setEvents(events);
        this._initializePromise();
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
        this._status = Subscription.STATE_NEW;
    }

    public setSubscribing(): void {
        if (this._ready === true) {
            // new promise for this subscription
            this._initializePromise();
            this._isResubscribe = true;
        }
        this._status = Subscription.STATE_SUBSCRIBING;
    }

    public setUnsubscribed(noResubscribe?: boolean): void {
        if (this._status === Subscription.STATE_UNSUBSCRIBED) {
            return;
        }
        this._status = Subscription.STATE_UNSUBSCRIBED;
        if (noResubscribe === true) {
            this._noResubscribe = true;
        }
        this.triggerUnsubscribe();
    }

    public setSubscribeSuccess(recovered: boolean): void {
        if (this._status === Subscription.STATE_SUCCESS) {
            return;
        }
        this._recovered = recovered;
        this._status = Subscription.STATE_SUCCESS;
        const successContext = this._getSubscribeSuccess();
        this.trigger('subscribe', [successContext]);
        this._resolve(successContext);
    }

    public setSubscribeError(error: ICentrifugeError): void {
        if (this._status === Subscription.STATE_ERROR) {
            return;
        }
        this._status = Subscription.STATE_ERROR;
        this._error = error;
        const errContext = this._getSubscribeError();
        this.trigger('error', [errContext]);
        this._reject(errContext);
    }

    public triggerUnsubscribe(): void {
        this.trigger('unsubscribe', [{
            channel: this.channel
        }]);
    }

    public isUnsubscribed(): boolean {
        return this._status === Subscription.STATE_UNSUBSCRIBED;
    }

    public isSuccess(): boolean {
        return this._status === Subscription.STATE_SUCCESS;
    }

    public isSubscribing(): boolean {
        return this._status === Subscription.STATE_SUBSCRIBING;
    }

    public shouldResubscribe(): boolean {
        return !this._noResubscribe;
    }

    public ready(callback: Function, errback: Function) {
        if (this._ready) {
            if (this.isSuccess()) {
                callback(this._getSubscribeSuccess());
            } else {
                errback(this._getSubscribeError());
            }
        }
    }

    public subscribe(): this {
        if (this._status === Subscription.STATE_SUCCESS) {
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
        return this._request('publish', data);
    }

    public presence(): Promise<any> {
        return this._request('presence');
    }

    public history(): Promise<any> {
        return this._request('history');
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

    private _getSubscribeSuccess(): ISubscriptionSuccess {
        return {
            channel: this.channel,
            isResubscribe: this._isResubscribe,
            recovered: this._recovered
        };
    }

    private _getSubscribeError(): ICentrifugeError {
        const subscribeError = this._error;
        subscribeError.channel = this.channel;
        subscribeError.isResubscribe = this._isResubscribe;
        return subscribeError;
    }

    private _request(method: string, data?: any): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            if (this.isUnsubscribed()) {
                reject(Centrifuge.createErrorObject('subscription unsubscribed', 'fix'));
                return;
            }
            this._promise.then(() => {
                if (!this._centrifuge.isConnected()) {
                    reject(Centrifuge.createErrorObject('disconnected', 'retry'));
                    return;
                }
                const params = {
                    channel: this.channel,
                };
                if (data) {
                    params['data'] = data;
                }
                this._centrifuge.addMessage(<ISubscriptionMessage>{
                    method,
                    params,
                }).then((response: ICentrifugeMessage) => {
                    resolve(response);
                }, (error: ICentrifugeError) => {
                    reject(error);
                });
            }, (err: any) => {
                reject(err);
            });
        });
    }

}
