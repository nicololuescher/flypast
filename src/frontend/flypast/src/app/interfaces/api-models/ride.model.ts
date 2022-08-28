import { BaseHttp } from './base.model';

export interface RideHttp extends BaseHttp {
    attraction_id: number;
    ticket_id: number;
    slot_number: number;
}
