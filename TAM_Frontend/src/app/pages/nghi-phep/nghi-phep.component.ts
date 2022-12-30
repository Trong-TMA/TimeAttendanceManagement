import { ChamcongService } from 'src/app/shared/services/chamcong.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Gabsence } from 'src/app/shared/models/getAbsence.model';
import { Gcheckinout } from 'src/app/shared/models/getCheckinout.model';
import { NghiPhepService } from 'src/app/shared/services/nghiphep.service';
import { Absence } from 'src/app/shared/models/absence.model';
import { Guid } from 'guid-typescript';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-nghi-phep',
  templateUrl: './nghi-phep.component.html',
  styleUrls: ['./nghi-phep.component.scss']
})
export class NghiPhepComponent implements OnInit {


  loadDataEmit: EventEmitter<any>
  absence: Absence = new Absence();
  displayCreate = false;
  isSpinning: boolean;
  listAbsence: Array<any> = [];
  stffVM: any;

  constructor(private nghiphepService: NghiPhepService,
    private chamcongServices: ChamcongService) {
    this.isSpinning = false;
    this.loadDataEmit =  new EventEmitter();
  }

  loadData(){
    this.loadDataEmit.emit();
  }

  ngOnInit(): void {
    this.loadAbsence();
  }

  loadAbsence(){
    this.isSpinning = true;
    return this.getAbsence().subscribe((item:any)=>{
      //Time out for load data
      setTimeout(()=>{
        this.listAbsence = item;
        this.isSpinning = false;
      }, 1000);
    });
  }

  getAbsence(){
    var rightNow = new Date();
    this.stffVM = new Gabsence(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      "",
      (rightNow.getMonth()+1).toString(),
    );
    return this.nghiphepService.getabsence(this.stffVM);
  }

  getCheckinout(){
    var rightNow = new Date();
    const stffVM = new Gcheckinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
            localStorage.getItem("stf_Name") || '{}', "",rightNow.toISOString().slice(0,10).replace(/-/g,""),
            rightNow.toISOString().slice(0,10).replace(/-/g,""), (rightNow.getMonth()+1).toString(), 'week');

    return this.chamcongServices.getcheckinout(stffVM);
  }

  showDialogCreate() {
    this.getCheckinout().subscribe((item: any)=>{
      item.forEach((elm: Absence) => {
        this.absence.cio_Map_Cd = elm.cio_Map_Cd;
        this.absence.cio_Ymd = elm.cio_Ymd;
        this.absence.cio_Day = elm.cio_Day;
        this.absence.in_Hh_Mm =  elm.in_Hh_Mm;
        this.absence.out_Hh_Mm =  elm.out_Hh_Mm;
        this.absence.cio_Duration =  elm.cio_Duration;
        this.absence.cio_State =  elm.cio_State;
        this.absence.ip_In_Log =  elm.ip_In_Log;
        this.absence.ip_Out_Log =  elm.ip_Out_Log;
        this.absence.update_Psn_Cd =  elm.update_Psn_Cd;
        this.absence.taManager =  elm.taManager;
        this.absence.delete_Ymd =  elm.delete_Ymd;
        this.absence.insert_Ymd =  elm.insert_Ymd;
        this.absence.update_Ymd =  elm.update_Ymd;
        this.absence.insert_Psn_Cd =  elm.insert_Psn_Cd;
        this.loadData();
      });
    });
    this.displayCreate = true;
  }

}
