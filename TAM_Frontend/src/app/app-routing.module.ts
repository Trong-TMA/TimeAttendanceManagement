import { DotTonVinhModule } from './pages/dot-ton-vinh/dot-ton-vinh.module';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'dashboard/De-xuat-ca-nhan', loadChildren: () => import('./pages/de-xuat-ca-nhan/de-xuat-ca-nhan.module').then(m => m.DeXuatCaNhanModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
