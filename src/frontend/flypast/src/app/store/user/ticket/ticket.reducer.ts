import { Action, createReducer, on } from '@ngrx/store';

import { Ticket } from '../../../interfaces/models';
import { ticketActions } from './ticket.actions';

export interface TicketState {
    ticket: Ticket | null;
}

const initialState: TicketState = {
    ticket: null
};

const reducer = createReducer(
    initialState,
    on(ticketActions.storeTicket, (state: TicketState, { response }): TicketState => {
        return {
            ...state,
            ticket: response
        };
    })
);

export function ticketReducer(state: TicketState | undefined, action: Action): TicketState {
    return reducer(state, action);
}
