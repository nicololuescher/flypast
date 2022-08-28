import { createAction, props } from '@ngrx/store';

import {FreeSlot} from "../../../interfaces/free-slots.interface";

export const freeSlotsActions = {
    fetchFreeSlots: createAction('[FreeSlots] fetch free slots'),
    storeFreeSlots: createAction('[FreeSlots] store free slots', props<{ response: FreeSlot[] }>())
};
