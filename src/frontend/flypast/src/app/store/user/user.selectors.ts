import { createFeatureSelector } from '@ngrx/store';

import { userFeatureKey, UserState } from './user.reducer';

export const userSelector = createFeatureSelector<UserState>(userFeatureKey);
