import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ButtonModule } from 'primeng/button';
import { DonViCreateComponent } from './don-vi-create/don-vi-create.component';
import { DialogModule } from 'primeng/dialog';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ToastModule } from 'primeng/toast';
import { DonViListComponent } from './don-vi-list/don-vi-list.component';
import { DonViItemComponent } from './don-vi-item/don-vi-item.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { DonViComponent } from './don-vi.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DonViRoutingModule } from './don-vi-routing.module';
import { DonViEditComponent } from './don-vi-edit/don-vi-edit.component';


@NgModule({
  declarations: [
    DonViComponent,
    DonViItemComponent,
    DonViListComponent,
    DonViCreateComponent,
    DonViEditComponent,
  ],
  imports: [
    CommonModule,
    DonViRoutingModule,
    InputTextModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
    NzDividerModule,
    ToastModule,
    ButtonModule,
    NzModalModule,
    NzSpinModule,
    DialogModule
  ],
  exports:[
    DonViComponent,
  ]
})
export class DonViModule { }
