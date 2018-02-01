export interface ICentrifugeConfig {
    sockJS?: any;
    server?: string;
    transports?: string[];
    retry?: number;
    maxRetry?: number;
    timeout?: number;
    info?: string;
    resubscribe?: boolean;
    ping?: boolean;
    pingInterval?: number;
    pongWaitTimeout?: number;
    debug?: boolean;
    insecure?: boolean;
    privateChannelPrefix?: string;
    onTransportClose?: Function;
    onRefresh?: Function;
    refreshEndpoint?: string;
    refreshHeaders?: Object;
    refreshParams?: Object;
    refreshData?: Object;
    refreshTransport?: string; // deprecated, unused
    refreshAttempts?: number;
    refreshInterval?: number;
    refreshFailed?: Function;
    onPrivateChannelAuth?: Function;
    authEndpoint?: string;
    authHeaders?: Object;
    authParams?: Object;
    authTransport?: string; // deprecated, unused
    user?: string;
    timestamp?: string;
    token?: string;
    url?: string;
}
