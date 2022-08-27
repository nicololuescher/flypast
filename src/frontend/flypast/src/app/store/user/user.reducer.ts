import { combineReducers } from '@ngrx/store';

export const userFeatureKey = 'user';

export interface UserState {}

export const userReducer = combineReducers<UserState>({});
