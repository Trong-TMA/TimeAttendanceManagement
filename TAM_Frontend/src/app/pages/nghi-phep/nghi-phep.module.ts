import { DialogModule } from 'primeng/dialog';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NghiPhepComponent } from './nghi-phep.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NghiPhepListComponent } from './nghi-phep-list/nghi-phep-list.component';
import { NghiPhepSearchComponent } from './nghi-phep-search/nghi-phep-search.component';
import { NghiPhepCreateComponent } from './nghi-phep-create/nghi-phep-create.component';


@NgModule({
  declarations: [
    NghiPhepComponent,
    NghiPhepListComponent,
    NghiPhepSearchComponent,
    NghiPhepCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzSpinModule,
    NzSelectModule,
    NzButtonModule,
    NzRadioModule,
    NzTableModule,
    DialogModule,
    NzFormModule,
    NzSelectModule,
    ReactiveFormsModule,
  ],
  exports:[
    NghiPhepComponent,
  ]
})
export class NghiPhepModule { }
