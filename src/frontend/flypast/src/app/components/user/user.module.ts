import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { LoginComponent } from './1-login/login.component';
import { RideSelectionComponent } from './2-ride-selection/ride-selection.component';
import { SelectActivityComponent } from './3-select-activity/select-activity.component';
import { RiderInformationComponent } from './4-rider-information/rider-information.component';
import { TimeSlotsComponent } from './5-time-slots/time-slots.component';
import { OrderSummaryComponent } from './6-order-summary/order-summary.component';
import { UserRoutingModule } from './user-routing.module';
import {LeafletMarkerClusterModule} from "@asymmetrik/ngx-leaflet-markercluster";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MapComponent} from "./map/map.component";

@NgModule({
    declarations: [
        LoginComponent,
        RideSelectionComponent,
        SelectActivityComponent,
        RiderInformationComponent,
        OrderSummaryComponent,
        TimeSlotsComponent,
        MapComponent
    ],
    imports: [CommonModule, UserRoutingModule, SharedModule, LeafletModule, LeafletMarkerClusterModule]
})
export class UserModule {}
