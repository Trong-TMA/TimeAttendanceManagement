import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { LichSuChamCongListModule } from './lich-su-cham-cong-list/lich-su-cham-cong-list.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { DialogModule } from 'primeng/dialog';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LichSuChamCongComponent } from './lich-su-cham-cong.component';
import { LichSuChamCongSearchComponent } from './lich-su-cham-cong-search/lich-su-cham-cong-search.component';
import { LichSuChamCongEditComponent } from './lich-su-cham-cong-edit/lich-su-cham-cong-edit.component';
import { LichSuChamCongListComponent } from './lich-su-cham-cong-list/lich-su-cham-cong-list.component';
import { LichSuChamCongItemComponent } from './lich-su-cham-cong-item/lich-su-cham-cong-item.component';
import { LichSuChamCongEditModule } from './lich-su-cham-cong-edit/lich-su-cham-cong-edit.module';
import { LichSuChamCongEditSearchComponent } from './lich-su-cham-cong-edit-search/lich-su-cham-cong-edit-search.component';
import { LichSuChamCongEditListComponent } from './lich-su-cham-cong-edit-list/lich-su-cham-cong-edit-list.component';



@NgModule({
  declarations: [
    LichSuChamCongComponent,
    LichSuChamCongSearchComponent,
    LichSuChamCongEditComponent,
    LichSuChamCongListComponent,
    LichSuChamCongItemComponent,
    LichSuChamCongEditSearchComponent,
    LichSuChamCongEditListComponent
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
    NzFormModule,
    LichSuChamCongListModule,
    NzAnchorModule
  ]
})
export class LichSuChamCongModule { }
