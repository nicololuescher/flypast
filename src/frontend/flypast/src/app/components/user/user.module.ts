import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { LoginComponent } from './login/login.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RideSelectionComponent } from './ride-selection/ride-selection.component';
import { RiderInformationComponent } from './rider-information/rider-information.component';
import { SelectActivityComponent } from './select-activity/select-activity.component';
import { TimeSlotsComponent } from './time-slots/time-slots.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [
        LoginComponent,
        RideSelectionComponent,
        SelectActivityComponent,
        RiderInformationComponent,
        OrderSummaryComponent,
        TimeSlotsComponent
    ],
    imports: [CommonModule, UserRoutingModule, SharedModule]
})
export class UserModule {}
