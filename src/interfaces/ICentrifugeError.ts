export interface ICentrifugeError {
    error: string;
    advice?: string;
    channel?: string;
    isResubscribe?: boolean;
    body?: any;
}
