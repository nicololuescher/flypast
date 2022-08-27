import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '',   redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('./components/user/user.module').then((m) => m.UserModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
