import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import {RideSelectionComponent} from "./ride-selection/ride-selection.component";

@NgModule({
    declarations: [LoginComponent, RideSelectionComponent],
    imports: [CommonModule, UserRoutingModule, FormsModule]
})
export class UserModule {}
