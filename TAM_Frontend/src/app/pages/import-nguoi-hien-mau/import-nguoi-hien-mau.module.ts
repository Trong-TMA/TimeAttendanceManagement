import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportNguoiHienMauComponent } from './import-nguoi-hien-mau.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import {FileUploadModule} from 'primeng/fileupload';
import { IconDefinition } from '@ant-design/icons-angular';
import { CaretLeftOutline, SettingOutline, StepBackwardOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
];

@NgModule({
  declarations: [
    ImportNguoiHienMauComponent
  ],
  imports: [
    CommonModule,
    NzSelectModule,
    NzStepsModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzFormModule,
    ReactiveFormsModule,
    NzUploadModule,
    NzButtonModule,
    FileUploadModule,
    NzTableModule,
    NzSpinModule
  ]
})
export class ImportNguoiHienMauModule { }
