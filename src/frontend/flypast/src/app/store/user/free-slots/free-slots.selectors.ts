import { createSelector } from '@ngrx/store';

import { FreeChunk } from '../../../interfaces/free-slots.interface';
import { UserState } from '../user.reducer';
import { userSelector } from '../user.selectors';
import { FreeSlotsState } from './free-slots.reducer';

const getTicketState = createSelector(userSelector, (state: UserState): FreeSlotsState => {
    return state['freeSlots'];
});

const getFreeSlots = createSelector(getTicketState, (state: FreeSlotsState): FreeChunk[] | null => {
    return state.slots;
});

const getFirstFreeSlot = createSelector(getFreeSlots, (chunk: FreeChunk[] | null): number | null => {
    return chunk?.[0]?.slots?.[0]?.slot_number ?? null;
});

export const freeSlotsSelectors = {
    getFirstFreeSlot,
    getFreeSlots
};
