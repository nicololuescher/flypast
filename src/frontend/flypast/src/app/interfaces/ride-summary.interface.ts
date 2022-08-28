import { Attraction, Ticket } from './models';

export interface RideSummary {
    attraction: Attraction | null;
    tickets: Ticket[];
    slot_number: number | null;
    slot_text: string | null;
}
