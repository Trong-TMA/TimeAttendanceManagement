import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ButtonModule } from 'primeng/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachHienMauComponent } from './danh-sach-hien-mau.component';
import { DanhSachHienMauListComponent } from './danh-sach-hien-mau-list/danh-sach-hien-mau-list.component';
import { DanhSachHienMauSearchComponent } from './danh-sach-hien-mau-search/danh-sach-hien-mau-search.component';
import { IconModule } from '@ant-design/icons-angular';
import {MultiSelectModule} from 'primeng/multiselect';
import { DanhSachHienMauEditComponent } from './danh-sach-hien-mau-edit/danh-sach-hien-mau-edit.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DanhSachHienMauCreateComponent } from './danh-sach-hien-mau-create/danh-sach-hien-mau-create.component';

@NgModule({
  declarations: [
    DanhSachHienMauComponent,
    DanhSachHienMauListComponent,
    DanhSachHienMauSearchComponent,
    DanhSachHienMauEditComponent,
    DanhSachHienMauCreateComponent
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
export class DanhSachHienMauModule { }
