import { Base } from './base.model';

export interface Ticket extends Base {
    ticket_number: string;
    number_of_rides: number;
    valid_at_day: Date;
}
