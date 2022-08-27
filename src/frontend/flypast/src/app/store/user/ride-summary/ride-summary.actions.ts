import { createAction, props } from '@ngrx/store';

import { Attraction, Ticket } from '../../../interfaces/models';

export const rideSummaryActions = {
    storeSelectedAttraction: createAction('[RideSummary] store selected attraction', props<{ id: number }>()),
    storeSelectedAttractionAndTicket: createAction(
        '[RideSummary] store selected attraction and ticket',
        props<{ attraction: Attraction; ticket: Ticket }>()
    ),
    fetchAdditionalTicket: createAction('[RideSummary] fetch additional ticket', props<{ ticketNumber: string }>()),
    storeAdditionalTicket: createAction('[RideSummary] store additional ticket', props<{ response: Ticket }>()),
    storeSelectedSlotNumber: createAction('[RideSummary] store selected slot number', props<{ id: number }>()),
    storeRide: createAction('[RideSummary] store ride'),
};
