import { createAction, props } from '@ngrx/store';

import { Attraction, Ticket } from '../../../interfaces/models';
import {RideSummary} from "../../../interfaces/ride-summary.interface";

export const rideSummaryActions = {
    storeSelectedAttraction: createAction('[RideSummary] store selected attraction', props<{ id: number }>()),
    storeSelectedAttractionAndTicket: createAction(
        '[RideSummary] store selected attraction and ticket',
        props<{ attraction: Attraction; ticket: Ticket }>()
    ),
    fetchAdditionalTicket: createAction('[RideSummary] fetch additional ticket', props<{ ticketNumber: string }>()),
    storeAdditionalTicket: createAction('[RideSummary] store additional ticket', props<{ response: Ticket }>()),
    storeSelectedSlotNumber: createAction('[RideSummary] store selected slot number', props<{ id: number, text: string }>()),
    storeRide: createAction('[RideSummary] store ride'),
    storeStillOpen: createAction('[RideSummary] store still open', props<{ count: number }>()),
    persistRide: createAction('[RideSummary] persist ride', props<{ ride: RideSummary }>()),
};
