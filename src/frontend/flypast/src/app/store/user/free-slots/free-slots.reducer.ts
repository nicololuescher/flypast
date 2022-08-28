import { Action, createReducer, on } from '@ngrx/store';

import { FreeChunk } from '../../../interfaces/free-slots.interface';
import { freeSlotsActions } from './free-slots.actions';

export interface FreeSlotsState {
    slots: FreeChunk[] | null;
}

const initialState: FreeSlotsState = {
    slots: null
};

const reducer = createReducer(
    initialState,
    on(freeSlotsActions.storeFreeSlots, (state: FreeSlotsState, { response }): FreeSlotsState => {
        return {
            ...state,
            slots: response
        };
    })
);

export function freeSlotsReducer(state: FreeSlotsState | undefined, action: Action): FreeSlotsState {
    return reducer(state, action);
}
