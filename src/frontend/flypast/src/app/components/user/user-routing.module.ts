import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {RideSelectionComponent} from "./ride-selection/ride-selection.component";
import { SelectActivityComponent } from './select-activity/select-activity.component';

const routes: Routes = [
    { path: '',   redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'ride-selection', component: RideSelectionComponent },
    { path: 'select-activity', component: SelectActivityComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
