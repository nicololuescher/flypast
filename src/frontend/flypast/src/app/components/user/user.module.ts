import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import {RideSelectionComponent} from "./ride-selection/ride-selection.component";

@NgModule({
    declarations: [LoginComponent, UserComponent, RideSelectionComponent],
    imports: [CommonModule, UserRoutingModule, FormsModule]
})
export class UserModule {}
