import { Action, createReducer, on } from '@ngrx/store';

import {RideSummary} from "../../../interfaces/ride-summary.interface";
import {rideSummaryActions} from "./ride-summary.actions";

export interface RideSummaryState {
    rideSummary: RideSummary;
}

const initialState: RideSummaryState = {
    rideSummary: {
        attraction: null,
        tickets: [],
        slot_number: null
    }
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
    on(rideSummaryActions.storeAdditionalTicket, (state: RideSummaryState, { ticket }): RideSummaryState => {
        return {
            ...state,
            rideSummary: {
                ...state.rideSummary,
                tickets: [ ...state.rideSummary.tickets, ticket ]
            }
        };
    }),
    on(rideSummaryActions.storeSelectedSlotNumber, (state: RideSummaryState, { id }): RideSummaryState => {
        return {
            ...state,
            rideSummary: {
                ...state.rideSummary,
                slot_number: id
            }
        };
    })
);

export function rideSummaryReducer(state: RideSummaryState | undefined, action: Action): RideSummaryState {
    return reducer(state, action);
}
