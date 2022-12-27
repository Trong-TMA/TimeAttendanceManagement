import { SummaryService } from './../../shared/services/summary.service';
import { Regissummary } from './../../shared/models/Regissummary.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {


  isSpinning = false;
  message = "";
  constructor(
    private summaryservice: SummaryService)
  {

  }

  ngOnInit(): void {
  }

  confirm(){
    var rightNow = new Date();
    var year = rightNow.getFullYear().toString();
    var month = (rightNow.getMonth() + 1).toString();
    const regissummary = new Regissummary(
      localStorage.getItem("stf_Cd") || '', localStorage.getItem("stf_Dpm_Cd") || '',
      localStorage.getItem("stf_Name") || '',"",year, month);
    this.summaryservice.regisSummary(regissummary).subscribe((item:any)=>{
      this.message = item.message;
    });
  }

}
