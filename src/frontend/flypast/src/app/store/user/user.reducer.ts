import { combineReducers } from '@ngrx/store';

import { ticketReducer, TicketState } from './ticket/ticket.reducer';
import {attractionReducer, AttractionState} from "./attraction/attraction.reducer";

export const userFeatureKey = 'user';

export interface UserState {
    ticket: TicketState;
    attractions: AttractionState;
}

export const userReducer = combineReducers<UserState>({
    ticket: ticketReducer,
    attractions: attractionReducer
});
