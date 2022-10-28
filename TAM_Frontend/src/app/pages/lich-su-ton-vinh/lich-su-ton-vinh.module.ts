import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ToastModule } from 'primeng/toast';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LichSuTonVinhComponent } from './lich-su-ton-vinh.component';
import { LichSuTonVinhListComponent } from './lich-su-ton-vinh-list/lich-su-ton-vinh-list.component';
import { LichSuTonVinhSearchComponent } from './lich-su-ton-vinh-search/lich-su-ton-vinh-search.component';
import { LichSuTonVinhListEditComponent } from './lich-su-ton-vinh-list/lich-su-ton-vinh-list-edit/lich-su-ton-vinh-list-edit.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IconModule } from '@ant-design/icons-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { ExportComponent } from './export/export.component';




@NgModule({
  declarations: [
    LichSuTonVinhComponent,
    LichSuTonVinhListComponent,
    LichSuTonVinhSearchComponent,
    LichSuTonVinhListEditComponent,
    ExportComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    DialogModule,
    InputTextModule,
    IconModule,
    MultiSelectModule,
    ToastModule,
    NzSpinModule,
    ButtonModule,
    DialogModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    FormsModule,
    BsDatepickerModule

  ]
})
export class LichSuTonVinhModule { }
