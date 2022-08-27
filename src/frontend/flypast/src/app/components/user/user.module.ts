import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import {RideSelectionComponent} from "./ride-selection/ride-selection.component";
import {SharedModule} from "../../shared.module";

@NgModule({
    declarations: [LoginComponent, RideSelectionComponent],
    imports: [CommonModule, UserRoutingModule, SharedModule]
})
export class UserModule {}
