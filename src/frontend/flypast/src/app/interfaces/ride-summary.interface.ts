import {Attraction, Ticket} from "./models";

export interface RideSummary {
    attraction: Attraction | null;
    tickets: Ticket[];
    slot_number: number | null;
}
