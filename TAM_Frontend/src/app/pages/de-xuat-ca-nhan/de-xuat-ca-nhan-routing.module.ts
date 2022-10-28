
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeXuatCaNhanComponent } from './de-xuat-ca-nhan.component';


const routes: Routes = [
  { path: '', component: DeXuatCaNhanComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeXuatCaNhanRoutingModule { }
