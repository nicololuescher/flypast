import { createAction, props } from '@ngrx/store';

import { Ticket } from '../../../interfaces/models';

export const ticketActions = {
    fetchTicket: createAction('[Ticket] fetch entered ticket', props<{ ticketNumber: string }>()),
    storeTicket: createAction('[Ticket] store ticket', props<{ response: Ticket }>())
};
