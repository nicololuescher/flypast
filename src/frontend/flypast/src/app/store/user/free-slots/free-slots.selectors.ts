import { createSelector } from '@ngrx/store';

import { UserState } from '../user.reducer';
import { userSelector } from '../user.selectors';
import {FreeSlotsState} from "./free-slots.reducer";
import {FreeSlot} from "../../../interfaces/free-slots.interface";

const getTicketState = createSelector(userSelector, (state: UserState): FreeSlotsState => {
    return state['freeSlots'];
});

const getFreeSlots = createSelector(getTicketState, (state: FreeSlotsState): FreeSlot[] | null => {
    return state.slots;
});


export const freeSlotsSelectors = {
    getFreeSlots
};
