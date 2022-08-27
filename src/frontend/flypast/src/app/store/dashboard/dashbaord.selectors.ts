import { createFeatureSelector } from '@ngrx/store';
import {dashboardFeatureKey, DashboardState} from "./dashboard.reducer";


export const dashboardSelector = createFeatureSelector<DashboardState>(dashboardFeatureKey);
