export interface ICentrifugeMessage {
    uid?: string;
    body?: {
        channel: string;
        uid: string;
    };
    error?: string;
    advice?: string;
}
