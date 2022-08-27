import { createAction, props } from '@ngrx/store';
import {Attraction, Ride, Ticket} from "../../../interfaces/models";

export const rideSummaryActions = {
    storeSelectedAttractionAndTicket: createAction('[RideSummary] store selected attraction and ticket', props<{ attraction: Attraction, ticket: Ticket }>()),
    storeAdditionalTicket: createAction('[RideSummary] store additional ticket', props<{ ticket: Ticket }>()),
    storeSelectedSlotNumber: createAction('[RideSummary] store selected slot number', props<{ id: number }>()),
    storeRide: createAction('[RideSummary] store ride'),
    storeRideResponse: createAction('[RideSummary] store ride response', props<{ response: Ride }>())
};
