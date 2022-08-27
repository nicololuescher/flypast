import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { adminFeatureKey, adminReducer } from './admin/admin.reducer';
import { dashboardFeatureKey, dashboardReducer } from './dashboard/dashboard.reducer';
import { AttractionEffect } from './user/attraction/attraction.effect';
import { TicketEffect } from './user/ticket';
import { userFeatureKey, userReducer } from './user/user.reducer';
import {RideSummaryEffect} from "./user/ride-summary";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(adminFeatureKey, adminReducer),
        StoreModule.forFeature(dashboardFeatureKey, dashboardReducer),
        StoreModule.forFeature(userFeatureKey, userReducer),
        EffectsModule.forFeature([TicketEffect, AttractionEffect, RideSummaryEffect])
    ]
})
export class AppStoreModule {}
