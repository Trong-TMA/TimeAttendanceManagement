import { Staff } from './../../../shared/models/staff.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lich-su-cham-cong-edit-list',
  templateUrl: './lich-su-cham-cong-edit-list.component.html',
  styleUrls: ['./lich-su-cham-cong-edit-list.component.scss']
})
export class LichSuChamCongEditListComponent implements OnInit {

  @Input() listStaff: any;
  isSpinning: boolean;
  products: Staff[] = [];
  display: boolean = false;


  constructor() {
    this.isSpinning = false;
   }

  ngOnInit(): void {
  }

  checkAllCheckBox(ev: any) {

	}

	isAllCheckBoxChecked() {

	}

  showDialog() {
    this.display = true;
  }
}
