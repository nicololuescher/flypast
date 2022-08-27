import { createFeatureSelector } from '@ngrx/store';

import { adminFeatureKey, AdminState } from './admin.reducer';

export const adminSelector = createFeatureSelector<AdminState>(adminFeatureKey);
