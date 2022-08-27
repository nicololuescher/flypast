import { combineReducers } from '@ngrx/store';

import { ticketReducer, TicketState } from './ticket/ticket.reducer';

export const userFeatureKey = 'user';

export interface UserState {
    ticket: TicketState;
}

export const userReducer = combineReducers<UserState>({
    ticket: ticketReducer
});
