import { Base } from './base.model';

export interface Ride extends Base {
    attraction_id: number;
    ticket_id: number;
    slot_number: number;
}

export interface RideContent {
    attraction_id: number;
    ticket_id: number;
    slot_number: number;
}
