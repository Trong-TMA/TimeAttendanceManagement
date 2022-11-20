import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/shared/models/staff.model';

@Component({
  selector: 'app-lich-su-cham-cong-edit',
  templateUrl:'./lich-su-cham-cong-edit.component.html',
  styleUrls: ['./lich-su-cham-cong-edit.component.scss']
})
export class LichSuChamCongEditComponent implements OnInit {

  idDpm: any;
  isSpinning: boolean;
  constructor(private activatedRoute : ActivatedRoute) {
      this.isSpinning = false;
    }

    stff1 = new Staff('1',"Trong-vm","8:00","","","");
    stff2 = new Staff('1',"Nhan-hm","8:00","","","");
    listStaffofDpm: Staff[] = [this.stff1,this.stff2];

  ngOnInit(): void {
    this.activatedRoute.snapshot.queryParams['id']
  }
}
