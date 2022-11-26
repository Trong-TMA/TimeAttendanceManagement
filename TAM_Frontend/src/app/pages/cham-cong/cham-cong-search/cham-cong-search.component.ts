import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GStaff } from 'src/app/shared/models/getStaff.model';
import { StaffService } from 'src/app/shared/services/staff.sevice';

@Component({
  selector: 'app-cham-cong-search',
  templateUrl: './cham-cong-search.component.html',
  styleUrls: ['./cham-cong-search.component.scss']
})
export class ChamCongSearchComponent implements OnInit {

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
    private stffservice: StaffService,
    private router: Router) {
  }

  ngOnInit(): void {
  }


}
