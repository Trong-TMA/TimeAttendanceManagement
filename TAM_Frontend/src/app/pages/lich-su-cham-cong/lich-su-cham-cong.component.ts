import { StaffService } from 'src/app/shared/services/staff.sevice';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/models/department.model';
import { InfStaff } from 'src/app/shared/models/infstaff.model';
import { Staff } from 'src/app/shared/models/staff.model';
import { getDept } from 'src/app/shared/models/getDepartment.model';


@Component({
  selector: 'app-lich-su-cham-cong',
  templateUrl: './lich-su-cham-cong.component.html',
  styleUrls: ['./lich-su-cham-cong.component.scss']
})
export class LichSuChamCongComponent implements OnInit {

  isSpinning: boolean;
  listStaff: any;
  listInfDpm: any;

  constructor(private staffservice: StaffService) {
    this.isSpinning = false;
  }

  ngOnInit(): void {
    this.loadDept();
  }

  loadDept(){
    const dept = new getDept(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      "");
    this.staffservice.getDept(dept).subscribe((item:any)=>{
      this.listInfDpm = item;
    });
  }
}
