import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import {RideSelectionComponent} from "./ride-selection/ride-selection.component";
import {SharedModule} from "../../shared.module";
import { SelectActivityComponent } from './select-activity/select-activity.component';

@NgModule({
    declarations: [LoginComponent, RideSelectionComponent, SelectActivityComponent],
    imports: [CommonModule, UserRoutingModule, SharedModule]
})
export class UserModule {}
