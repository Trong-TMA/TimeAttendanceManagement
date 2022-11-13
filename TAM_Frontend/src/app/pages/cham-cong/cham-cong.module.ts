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


@NgModule({
  declarations: [
    ChamCongComponent,
    ChamCongListComponent,
    ChamCongSearchComponent,
    ChamCongChiTietComponent
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
  ]
})
export class ChamCongModule { }
