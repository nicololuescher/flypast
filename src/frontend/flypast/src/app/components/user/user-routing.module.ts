import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './1-login/login.component';
import { RideSelectionComponent } from './2-ride-selection/ride-selection.component';
import { SelectActivityComponent } from './3-select-activity/select-activity.component';
import { RiderInformationComponent } from './4-rider-information/rider-information.component';
import { TimeSlotsComponent } from './5-time-slots/time-slots.component';
import { OrderSummaryComponent } from './6-order-summary/order-summary.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'ride-selection', component: RideSelectionComponent },
    { path: 'select-activity', component: SelectActivityComponent },
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'time-slots', component: TimeSlotsComponent },
    { path: 'rider-information', component: RiderInformationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
