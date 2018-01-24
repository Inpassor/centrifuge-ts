export interface ICentrifugeConnectResponse {
    expires: boolean;
    expired: boolean;
    client: string;
    ttl: number;
}
