import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CLD } from 'src/app/shared/models/CLD.model';
import { Gcheckinout } from 'src/app/shared/models/getCheckinout.model';
import { getCLD } from 'src/app/shared/models/getCLD.model';
import { GStaff } from 'src/app/shared/models/getStaff.model';
import { ChamcongService } from 'src/app/shared/services/chamcong.service';
import { StaffService } from 'src/app/shared/services/staff.sevice';
@Component({
  selector: 'app-cham-cong-search',
  templateUrl: './cham-cong-search.component.html',
  styleUrls: ['./cham-cong-search.component.scss']
})
export class ChamCongSearchComponent implements OnInit {

  isSpinning: boolean;
  cld: any;
  weeks: any[] = [];
  @Input() listCheckinout: any;
  @Output() loadDataEmit: EventEmitter<any>;
  public message = "";
  public radioValue = "week";
  public value = null;
  public startday = "";
  public endday = "";
  public fromdate = "";
  public todate = "";



  //Select staff
  optionList = [{ label: localStorage.getItem('stf_Name'), value: localStorage.getItem('stf_Cd')}];
  selectedValue = { label: localStorage.getItem('stf_Name'), value: localStorage.getItem('stf_Cd')};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);


  constructor(
    private  chamcongServices: ChamcongService,
    private router: Router) {
      this.isSpinning = false;
      this.loadDataEmit = new EventEmitter();
  }

  ngOnInit(): void {
    this.getCld();
  }

  loadData(){
    this.loadDataEmit.emit();
  }

  search(event: any){
    this.getCheckinout();
  }

  getCheckinout(){
    var rightNow = new Date();
    var month = (rightNow.getMonth()+1).toString();
    var stffVM: any = new Gcheckinout('','','','','','','','');
    switch(this.radioValue){
      case 'week':{
        month = "";
        this.getCld();
        stffVM = new Gcheckinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
          localStorage.getItem("stf_Name") || '{}', "", this.fromdate, this.todate, month, this.radioValue);
        break;
      }
      case 'selectdate':{
        if(this.startday != null && this.endday != null){
          stffVM = new Gcheckinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
            localStorage.getItem("stf_Name") || '{}', "",this.startday, this.endday, month, 'week');
          break;
        }
        else{
          break;
        }
      }
      case 'month':{
        stffVM = new Gcheckinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
          localStorage.getItem("stf_Name") || '{}', "", "", "", month, this.radioValue);
        break;
      }

    }
    this.chamcongServices.getcheckinout(stffVM).subscribe(res=>{
      this.loadDataEmit.emit(res)
    });
  }

  getCld(){
    var now = new Date();
    this.cld = new getCLD(now.getFullYear().toString(), (now.getMonth()+1).toString());
    return this.chamcongServices.getcld(this.cld).subscribe((item: any)=>{
      this.weeks.push(item);
      this.getWeeks();
  });

  }

  getWeeks(){
    var now = new Date();
    var cio_Ymd = now.toISOString().slice(0,10).replace(/-/g,"");
    var nowDate = this.weeks[0].find((i: { date: string; }) => i.date == cio_Ymd);
    var week = nowDate?.week
    var thisweeks: CLD[] = this.weeks[0].filter((i: { week: string; }) => i.week === week);

    this.fromdate = thisweeks[0].date;
    this.todate = thisweeks[thisweeks.length-1].date;
  }
}
