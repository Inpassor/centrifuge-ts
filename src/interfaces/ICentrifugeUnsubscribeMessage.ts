export interface ICentrifugeUnsubscribeMessage {
    method: string;
    uid?: string;
    params?: {
        channel: string;
    };
}
