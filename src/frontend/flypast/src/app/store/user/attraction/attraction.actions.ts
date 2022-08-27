import { createAction, props } from '@ngrx/store';

import { Attraction } from '../../../interfaces/models';

export const attractionActions = {
    fetchAttractions: createAction('[Attraction] fetch attractions'),
    storeAttractions: createAction('[Attraction] store attractions', props<{ response: Attraction[] }>())
};
