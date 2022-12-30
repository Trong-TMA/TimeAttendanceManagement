import { ChamcongService } from './../../shared/services/chamcong.service';
import { SummaryService } from './../../shared/services/summary.service';
import { Regissummary } from './../../shared/models/Regissummary.model';
import { Component, OnInit } from '@angular/core';
import { Gcheckinout } from 'src/app/shared/models/getCheckinout.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {


  listWorkingtime: Array<any> = [];
  listSummary: Array<any> = [];
  stffVM: any;
  isSpinning = false;
  message = "";
  constructor(
    private summaryservice: SummaryService,
    private chamcongServices: ChamcongService)  {

  }

  ngOnInit(): void {
    this.loadCheckinout();
  }

  confirm(){
    this.isSpinning = true;
    var rightNow = new Date();
    var year = rightNow.getFullYear().toString();
    var month = (rightNow.getMonth() + 1).toString();
    const regissummary = new Regissummary(
      localStorage.getItem("stf_Cd") || '', localStorage.getItem("stf_Dpm_Cd") || '',
      localStorage.getItem("stf_Name") || '',"",year, month);
    this.summaryservice.regisSummary(regissummary).subscribe((item:any)=>{
      setTimeout(() => {
        this.message = item.message;
        this.isSpinning = false;
      }, 1000);
    });
  }

  getCheckinout(){
    var rightNow = new Date();
    this.stffVM = new Gcheckinout(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      "",
      "",
      "",
      (rightNow.getMonth()+1).toString(),
      "month"
    );
    return this.chamcongServices.getcheckinout(this.stffVM);
  }

  loadCheckinout(){
    this.isSpinning = true;
    return this.getCheckinout().subscribe((item:any)=>{
      //Time out for load data
      setTimeout(()=>{
        this.listWorkingtime = item;
        this.isSpinning = false;
      }, 1000);
    });
  }

  loadSummary(){

  }
}
