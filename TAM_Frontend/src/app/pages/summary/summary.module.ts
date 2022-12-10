import { NzFormModule } from 'ng-zorro-antd/form';
import { NzOptionComponent, NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SummaryComponent } from './summary.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummarySearchComponent } from './summary-search/summary-search.component';
import { SummaryWorkingTimeComponent } from './summary-working-time/summary-working-time.component';
import { SummarySummaryComponent } from './summary-summary/summary-summary.component';



@NgModule({
  declarations: [
    SummaryComponent,
    SummarySearchComponent,
    SummaryWorkingTimeComponent,
    SummarySummaryComponent
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
export class SummaryModule { }
