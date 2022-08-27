import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditComponent } from './edit/edit.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [AdminComponent, LoginComponent, LandingComponent, EditComponent],
    imports: [CommonModule, AdminRoutingModule, SharedModule]
})
export class AdminModule {}
