import { BaseHttp } from './base.model';

export interface TicketHttp extends BaseHttp {
    ticket_number: string;
    number_of_rides: number;
    valid_at_day: string;
}
