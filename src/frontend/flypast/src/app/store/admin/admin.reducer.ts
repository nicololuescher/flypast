import { combineReducers } from '@ngrx/store';

export const adminFeatureKey = 'admin';

export interface AdminState {}

export const adminReducer = combineReducers<AdminState>({});
