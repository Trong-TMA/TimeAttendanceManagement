import { LichSuChamCongListComponent } from './lich-su-cham-cong-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: LichSuChamCongListComponent },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class LichSuChamCongListRoutingModule { }
