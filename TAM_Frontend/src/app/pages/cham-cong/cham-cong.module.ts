import { NzSpinModule } from 'ng-zorro-antd/spin';
import { DialogModule } from 'primeng/dialog';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { ChamCongComponent } from './cham-cong.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ChamCongListComponent } from './cham-cong-list/cham-cong-list.component';
import { ChamCongSearchComponent } from './cham-cong-search/cham-cong-search.component';
import { ChamCongChiTietComponent } from './cham-cong-chi-tiet/cham-cong-chi-tiet.component';
import { ChamCongItemComponent } from './cham-cong-item/cham-cong-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [
    ChamCongComponent,
    ChamCongListComponent,
    ChamCongSearchComponent,
    ChamCongChiTietComponent,
    ChamCongItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzTableModule,
    NzDividerModule,
    NzSelectModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    DialogModule,
    NzSpinModule,
    HttpClientModule,
    NzRadioModule,
  ]
})
export class ChamCongModule { }
