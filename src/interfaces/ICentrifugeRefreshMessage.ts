import {ICentrifugeCredentials} from './ICentrifugeCredentials';

export interface ICentrifugeRefreshMessage {
    method?: string;
    uid?: string;
    params?: ICentrifugeCredentials;
}
