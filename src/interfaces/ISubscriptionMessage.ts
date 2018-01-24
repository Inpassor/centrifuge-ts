export interface ISubscriptionMessage {
    method?: string;
    uid?: string;
    params?: {
        channel: string;
        data?: any;
    };
}
