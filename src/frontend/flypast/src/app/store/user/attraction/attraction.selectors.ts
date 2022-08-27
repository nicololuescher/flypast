import { createSelector } from '@ngrx/store';

import {Attraction} from '../../../interfaces/models';
import { UserState } from '../user.reducer';
import { userSelector } from '../user.selectors';
import {AttractionState} from "./attraction.reducer";

const getAttractionState = createSelector(userSelector, (state: UserState): AttractionState => {
    return state['attractions'];
});

const getAttractions = createSelector(getAttractionState, (state: AttractionState): Attraction[] | null => {
    return state.attractions;
});

export const attractionSelectors = {
    getAttractions
};
