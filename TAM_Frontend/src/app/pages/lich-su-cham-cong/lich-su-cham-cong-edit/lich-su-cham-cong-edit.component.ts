import { GStaff } from './../../../shared/models/getStaff.model';
import { StaffService } from './../../../shared/services/staff.sevice';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lich-su-cham-cong-edit',
  templateUrl:'./lich-su-cham-cong-edit.component.html',
  styleUrls: ['./lich-su-cham-cong-edit.component.scss']
})
export class LichSuChamCongEditComponent implements OnInit {

  idDpm: any;
  isSpinning: boolean;
  listStaffofDpm: any;
  constructor(private activatedRoute : ActivatedRoute,
      private stffservice: StaffService) {
      this.isSpinning = false;
  }

  ngOnInit(): void {
    this.idDpm = this.activatedRoute.snapshot.queryParams['id']
    this.getStaff();
  }


  getStaff(){
    const gstaff =  new GStaff(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      "message",
      this.idDpm
    );

    this.stffservice.getStaff(gstaff).subscribe((item)=>{
        this.listStaffofDpm = item;
        this.isSpinning = false;
    });
  }
}
