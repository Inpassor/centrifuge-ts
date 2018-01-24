export interface ICentrifugeSubscribeMessage {
    method?: string;
    uid?: string;
    params?: {
        channel: string;
        client?: string;
        info?: string;
        sign?: string;
        recover?: boolean;
        last?: string;
    };
}
