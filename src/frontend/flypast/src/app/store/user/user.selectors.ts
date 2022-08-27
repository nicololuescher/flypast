import { createFeatureSelector } from '@ngrx/store';

import { userFeatureKey, UserState } from './user.reducer';

export const adminSelector = createFeatureSelector<UserState>(userFeatureKey);
