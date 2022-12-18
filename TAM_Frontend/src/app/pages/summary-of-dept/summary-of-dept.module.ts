import { SummaryOfDeptComponent } from './summary-of-dept.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    SummaryOfDeptComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzLayoutModule,
    NzSpinModule,
    NzSelectModule,
    NzTableModule,
    NzButtonModule,
  ]
})
export class SummaryOfDeptModule { }
