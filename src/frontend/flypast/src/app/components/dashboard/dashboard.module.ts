import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {SharedModule} from "../../shared.module";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
