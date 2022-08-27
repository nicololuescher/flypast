import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { LoginComponent } from './login/login.component';
import { RideSelectionComponent } from './ride-selection/ride-selection.component';
import { SelectActivityComponent } from './select-activity/select-activity.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [LoginComponent, RideSelectionComponent, SelectActivityComponent],
    imports: [CommonModule, UserRoutingModule, SharedModule]
})
export class UserModule {}
