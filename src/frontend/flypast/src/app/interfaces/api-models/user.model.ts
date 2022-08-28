import { BaseHttp } from './base.model';

export interface UserHttp extends BaseHttp {
    username: string;
    name: string;
    password: string;
    avatar_url: string;
}
