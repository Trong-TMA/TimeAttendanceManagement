import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/models/department.model';
import { InfStaff } from 'src/app/shared/models/infstaff.model';
import { Staff } from 'src/app/shared/models/staff.model';


@Component({
  selector: 'app-lich-su-cham-cong',
  templateUrl: './lich-su-cham-cong.component.html',
  styleUrls: ['./lich-su-cham-cong.component.scss']
})
export class LichSuChamCongComponent implements OnInit {

  isSpinning: boolean;
  listDpm: any;
  listStaff: any;

  //Du lieu gia
  stff1 = new Staff('1',"Trong-vm","8:00","","","");
  stff2 = new Staff('1',"Nhan-hm","8:00","","","");
  listOfStaff: Staff[] = [this.stff1,this.stff2];
  dpm1 = new Department("101","Dept4",this.listOfStaff,"");



  listInfDpm: Department[] = [this.dpm1];


  constructor() {
    this.isSpinning = false;
  }

  ngOnInit(): void {
  }

  loadStaff(){

  }
}
