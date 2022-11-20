import { LichSuChamCongEditComponent } from './../pages/lich-su-cham-cong/lich-su-cham-cong-edit/lich-su-cham-cong-edit.component';
import { LichSuChamCongComponent } from './../pages/lich-su-cham-cong/lich-su-cham-cong.component';

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
    {
      path: 'lich-su-cham-cong',
      component: LichSuChamCongComponent,
    },
    {
      path: 'lich-su-cham-cong-edit',
      component: LichSuChamCongEditComponent,
    }
  ] },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }
