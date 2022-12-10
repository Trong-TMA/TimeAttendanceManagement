import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SalarySearchComponent } from './salary-search/salary-search.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { SalaryComponent } from './salary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SalaryComponent,
    SalaryComponent,
    SalaryListComponent,
    SalarySearchComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzSpinModule,
    NzRadioModule,
    NzSelectModule,
    NzButtonModule,
    FormsModule,
    NzTableModule
  ]
})
export class SalaryModule { }
