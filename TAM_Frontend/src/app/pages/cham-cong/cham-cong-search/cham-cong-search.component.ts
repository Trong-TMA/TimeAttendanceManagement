import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Gcheckinout } from 'src/app/shared/models/getCheckinout.model';
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
  stffVM: any;
  @Input() Listnguoihienmau: any;
  @Output() loadDataEmit: EventEmitter<any>;

  public message = "";
  public radioValue = "week";
  public value = null;
  public startday = "";
  public endday = "";



  //Select staff
  optionList = [{ label: localStorage.getItem('stf_Name'), value: localStorage.getItem('stf_Cd')}];
  selectedValue = { label: localStorage.getItem('stf_Name'), value: localStorage.getItem('stf_Cd')};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);


  constructor(
    private  chamcongServices: ChamcongService,
    private router: Router,
    private modalService: NzModalService) {
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
    this.getCheckinout().subscribe((res: any)=>{
        this.loadDataEmit.emit(res)
    })
  }

  getCld(){
    var now = new Date();
    return this.chamcongServices.getcld(now.getFullYear(), now.getMonth()+1).subscribe((item: any)=>{
        this.getWeeks(item);
    });

  }

  getWeeks(weeks: any){
    var now = new Date();
    var cio_Ymd = now.toISOString().slice(0,10).replace(/-/g,"");
    var nowDate = weeks.find((i: { date: string; }) => i.date = cio_Ymd);
    const thisweeks = [];
    for (const item of weeks){
      if(item.week === nowDate.week){
        thisweeks.push(item);
      }
    }
    this.startday = thisweeks[0].date;
    this.endday = thisweeks[thisweeks.length-1].date;
  }

  getCheckinout(){
    var rightNow = new Date();
    var month = (rightNow.getMonth()+1).toString();
    switch(this.radioValue){
      case 'week':{
        month = "";
        this.getCld();
        this.stffVM = new Gcheckinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
          localStorage.getItem("stf_Name") || '{}', "", this.startday, this.endday, month, this.radioValue);
        break;
      }
      case 'selectdate':{
        if(this.startday != null && this.endday != null){
          this.stffVM = new Gcheckinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
            localStorage.getItem("stf_Name") || '{}', "", this.startday, this.endday, month, 'week');
            break;
        }
        else{
          this.warming();
          break;
        }
      }
      case 'month':{
        this.stffVM = new Gcheckinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
          localStorage.getItem("stf_Name") || '{}', "", "", "", month, this.radioValue);
        break;
      }

    }
    return this.chamcongServices.getcheckinout(this.stffVM);
  }

  warming(): void {
    const modal = this.modalService.success({
      nzTitle: 'Start day or End day is empty',
      nzContent: 'Empty'
    });
    setTimeout(() => modal.destroy(), 3000);
  }
}
