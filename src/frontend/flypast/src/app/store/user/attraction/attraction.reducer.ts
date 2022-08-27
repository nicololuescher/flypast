import { Action, createReducer, on } from '@ngrx/store';

import {Attraction, } from '../../../interfaces/models';
import {attractionActions} from "./attraction.actions";

export interface AttractionState {
    attractions: Attraction[] | null;
}

const initialState: AttractionState = {
    attractions: null
};

const reducer = createReducer(
    initialState,
    on(attractionActions.storeAttractions, (state: AttractionState, { response }): AttractionState => {
        return {
            ...state,
            attractions: response
        };
    })
);

export function attractionReducer(state: AttractionState | undefined, action: Action): AttractionState {
    return reducer(state, action);
}
