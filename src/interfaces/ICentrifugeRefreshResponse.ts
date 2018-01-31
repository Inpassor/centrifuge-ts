export interface ICentrifugeRefreshResponse {
    version?: string;
    expires: boolean;
    expired: boolean;
    client: string;
    ttl: number;
}
