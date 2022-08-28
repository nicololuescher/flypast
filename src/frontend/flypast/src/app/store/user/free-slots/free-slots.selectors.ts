import { createSelector } from '@ngrx/store';

import { FreeChunk, FreeSlot } from '../../../interfaces/free-slots.interface';
import { UserState } from '../user.reducer';
import { userSelector } from '../user.selectors';
import { FreeSlotsState } from './free-slots.reducer';

const getTicketState = createSelector(userSelector, (state: UserState): FreeSlotsState => {
    return state['freeSlots'];
});

const getFreeSlots = createSelector(getTicketState, (state: FreeSlotsState): FreeChunk[] | null => {
    return state.slots;
});

const getFirstFreeSlot = createSelector(getFreeSlots, (chunk: FreeChunk[] | null): FreeSlot | null => {
    return chunk?.[0]?.slots?.[0] ?? null;
});

export const freeSlotsSelectors = {
    getFirstFreeSlot,
    getFreeSlots
};
