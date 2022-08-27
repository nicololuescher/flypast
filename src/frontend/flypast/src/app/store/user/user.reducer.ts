import { combineReducers } from '@ngrx/store';

import { attractionReducer, AttractionState } from './attraction/attraction.reducer';
import { ticketReducer, TicketState } from './ticket/ticket.reducer';
import {rideSummaryReducer, RideSummaryState} from "./ride-summary/ride-summary.reducer";

export const userFeatureKey = 'user';

export interface UserState {
    ticket: TicketState;
    attractions: AttractionState;
    rideSummary: RideSummaryState;
}

export const userReducer = combineReducers<UserState>({
    ticket: ticketReducer,
    attractions: attractionReducer,
    rideSummary: rideSummaryReducer,
});
