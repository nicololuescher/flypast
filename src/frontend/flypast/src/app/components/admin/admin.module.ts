import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [AdminComponent, LoginComponent, LandingComponent],
    imports: [CommonModule, AdminRoutingModule, SharedModule]
})
export class AdminModule {}
