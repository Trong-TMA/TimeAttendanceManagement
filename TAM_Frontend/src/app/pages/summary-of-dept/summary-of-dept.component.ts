import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/models/department.model';
import { Staff } from 'src/app/shared/models/staff.model';

@Component({
  selector: 'app-summary-of-dept',
  templateUrl: './summary-of-dept.component.html',
  styleUrls: ['./summary-of-dept.component.scss']
})
export class SummaryOfDeptComponent implements OnInit {

  //Du lieu gia
  stff1 = new Staff('1',"Trong-vm","8:00","","","");
  stff2 = new Staff('1',"Nhan-hm","8:00","","","");
  listOfStaff: Staff[] = [this.stff1,this.stff2];
  dpm1 = new Department("101","Dept4",this.listOfStaff,"");
  dpm2 = new Department("102","Dept5",this.listOfStaff,"");
  listDpm: Department[] = [this.dpm1, this.dpm2];

  constructor() { }

  ngOnInit(): void {
  }

  export(){}
}
