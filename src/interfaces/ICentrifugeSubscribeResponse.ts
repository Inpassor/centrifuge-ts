export interface ICentrifugeSubscribeResponse {
    channel: string;
    last: string;
    messages: any;
    recovered: boolean;
    status: boolean;
}
