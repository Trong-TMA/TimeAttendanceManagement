import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NghiPhepComponent } from './nghi-phep.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';


@NgModule({
  declarations: [
    NghiPhepComponent
  ],
  imports: [
    CommonModule,
    NzSwitchModule,
    FormsModule
  ],
  exports:[
    NghiPhepComponent,
  ]
})
export class NghiPhepModule { }
