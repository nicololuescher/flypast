import { Action, createReducer, on } from '@ngrx/store';

import { RideSummary } from '../../../interfaces/ride-summary.interface';
import { rideSummaryActions } from './ride-summary.actions';

export interface RideSummaryState {
    rideSummary: RideSummary;
    rideConfirmed: RideSummary[];
    stillOpen: number | null;
}

const initialState: RideSummaryState = {
    rideSummary: {
        attraction: null,
        tickets: [],
        slot_number: null,
        slot_text: null
    },
    rideConfirmed: [],
    stillOpen: null
};

const reducer = createReducer(
    initialState,
    on(rideSummaryActions.storeSelectedAttractionAndTicket, (state: RideSummaryState, { attraction, ticket }): RideSummaryState => {
        return {
            ...state,
            rideSummary: {
                ...state.rideSummary,
                attraction: attraction,
                tickets: [ticket]
            }
        };
    }),
    on(rideSummaryActions.storeAdditionalTicket, (state: RideSummaryState, { response }): RideSummaryState => {
        return {
            ...state,
            rideSummary: {
                ...state.rideSummary,
                tickets: [...state.rideSummary.tickets, response]
            }
        };
    }),
    on(rideSummaryActions.storeSelectedSlotNumber, (state: RideSummaryState, { id, text }): RideSummaryState => {
        return {
            ...state,
            rideSummary: {
                ...state.rideSummary,
                slot_number: id,
                slot_text: text
            }
        };
    }),
    on(rideSummaryActions.storeStillOpen, (state: RideSummaryState, { count }): RideSummaryState => {
        return {
            ...state,
            stillOpen: count
        };
    }),
    on(rideSummaryActions.persistRide, (state: RideSummaryState, { ride }): RideSummaryState => {
        return {
            ...state,
            rideConfirmed: [ ...state.rideConfirmed, ride ],
            stillOpen: state.stillOpen ? state.stillOpen - 1 : null
        };
    }),
);

export function rideSummaryReducer(state: RideSummaryState | undefined, action: Action): RideSummaryState {
    return reducer(state, action);
}
