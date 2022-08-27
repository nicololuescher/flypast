import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RideSelectionComponent } from './ride-selection/ride-selection.component';
import { RiderInformationComponent } from './rider-information/rider-information.component';
import { SelectActivityComponent } from './select-activity/select-activity.component';
import { TimeSlotsComponent } from './time-slots/time-slots.component';

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
