import { DialogModule } from 'primeng/dialog';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeXuatHoGiaDinhComponent } from './de-xuat-ho-gia-dinh.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { FileUploadModule } from 'primeng/fileupload';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { IconDefinition } from '@ant-design/icons-angular';
import { CaretLeftOutline, SettingOutline, StepBackwardOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline
];



@NgModule({
  declarations: [
    DeXuatHoGiaDinhComponent
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
    NzSpinModule,
    DialogModule
  ]
})
export class DeXuatHoGiaDinhModule { }
