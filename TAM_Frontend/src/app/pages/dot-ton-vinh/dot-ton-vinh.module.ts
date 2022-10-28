import { ButtonModule } from 'primeng/button';
import { DotTonVinhComponent } from './dot-ton-vinh.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotTonVinhRoutingModule } from './dot-ton-vinh-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DotTonVinhItemComponent } from './dot-ton-vinh-item/dot-ton-vinh-item.component';
import { DotTonVinhListComponent } from './dot-ton-vinh-list/dot-ton-vinh-list.component';
import {ToastModule} from 'primeng/toast';
import { DotTonVinhCreateComponent } from './dot-ton-vinh-create/dot-ton-vinh-create.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { DotTonVinhEditComponent } from './dot-ton-vinh-edit/dot-ton-vinh-edit.component';
import {DialogModule} from 'primeng/dialog';
@NgModule({
  declarations: [
    DotTonVinhComponent,
    DotTonVinhItemComponent,
    DotTonVinhListComponent,
    DotTonVinhCreateComponent,
    DotTonVinhEditComponent,
  ],
  imports: [
    CommonModule,
    DotTonVinhRoutingModule,
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
    DotTonVinhComponent
  ]
})
export class DotTonVinhModule { }
