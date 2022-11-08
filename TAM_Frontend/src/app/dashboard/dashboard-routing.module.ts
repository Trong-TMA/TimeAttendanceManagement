import { ChamCongComponent } from './../pages/cham-cong/cham-cong.component';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children:[
    {
      path: 'cham-cong',
      component: ChamCongComponent,
    },
  ] },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }
