import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('./components/user/user.module').then((m) => m.UserModule) },
    { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
