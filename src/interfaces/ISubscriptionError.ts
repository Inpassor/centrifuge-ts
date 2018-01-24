export interface ISubscriptionError {
    error: string;
    advice?: string;
    channel?: string;
    isResubscribe?: boolean;
}
