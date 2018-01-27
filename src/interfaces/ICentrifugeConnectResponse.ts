export interface ICentrifugeConnectResponse {
    version?: string;
    expires: boolean;
    expired: boolean;
    client: string;
    ttl: number;
}
