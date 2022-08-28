import { combineReducers } from '@ngrx/store';

import { attractionReducer, AttractionState } from './attraction/attraction.reducer';
import { freeSlotsReducer, FreeSlotsState } from './free-slots/free-slots.reducer';
import { rideSummaryReducer, RideSummaryState } from './ride-summary/ride-summary.reducer';
import { ticketReducer, TicketState } from './ticket/ticket.reducer';

export const userFeatureKey = 'user';

export interface UserState {
    ticket: TicketState;
    attractions: AttractionState;
    rideSummary: RideSummaryState;
    freeSlots: FreeSlotsState;
}

export const userReducer = combineReducers<UserState>({
    ticket: ticketReducer,
    attractions: attractionReducer,
    rideSummary: rideSummaryReducer,
    freeSlots: freeSlotsReducer
});
