import {ICentrifugeCredentials} from './ICentrifugeCredentials';

export interface ICentrifugeConnectMessage {
    method?: string;
    uid?: string;
    params?: ICentrifugeCredentials;
}
