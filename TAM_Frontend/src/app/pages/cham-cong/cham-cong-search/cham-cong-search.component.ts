import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  public radioValue = "week";
  public value = null;
  public fromdate = null;
  public todate = null;



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
  }

  loadData(){
    this.loadDataEmit.emit();
  }

  getCheckinout(){
    var rightNow = new Date();
    this.stffVM = new Gcheckinout(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      "",
      "20221126",
      "",
      (rightNow.getMonth()+1).toString(),
      "week"
    );
    return this.chamcongServices.getcheckinout(this.stffVM);
  }

  search(event: any){
    this.getCheckinout().subscribe((res: any)=>{
      this.loadDataEmit.emit(res)
    })
  }


}
