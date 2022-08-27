import { Base } from './base.model';

export interface User extends Base {
    username: string;
    name: string;
    password: string;
    avatar_url: string;
}
