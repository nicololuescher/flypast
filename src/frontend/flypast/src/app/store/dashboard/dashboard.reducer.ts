import { combineReducers } from '@ngrx/store';

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {}

export const dashboardReducer = combineReducers<DashboardState>({});
