import { SummaryOfDeptComponent } from './../pages/summary-of-dept/summary-of-dept.component';
import { SummaryComponent } from './../pages/summary/summary.component';
import { LichSuChamCongEditComponent } from './../pages/lich-su-cham-cong/lich-su-cham-cong-edit/lich-su-cham-cong-edit.component';
import { LichSuChamCongComponent } from './../pages/lich-su-cham-cong/lich-su-cham-cong.component';
import { ChamCongComponent } from './../pages/cham-cong/cham-cong.component';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SalaryComponent } from '../pages/salary/salary.component';
import { NghiPhepComponent } from '../pages/nghi-phep/nghi-phep.component';

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
      path: 'nghi-phep',
      component: NghiPhepComponent,
    },
    {
      path: 'lich-su-cham-cong-edit',
      component: LichSuChamCongEditComponent,
    },
    {
      path: 'summary',
      component: SummaryComponent,
    },
    {
      path: 'salary',
      component: SalaryComponent,
    },
    {
      path: 'summary-of-dept',
      component: SummaryOfDeptComponent,
    }
  ] },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DashboardRoutingModule { }
