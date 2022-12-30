import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nghi-phep-search',
  templateUrl: './nghi-phep-search.component.html',
  styleUrls: ['./nghi-phep-search.component.scss']
})
export class NghiPhepSearchComponent implements OnInit {

  public radioValue = "week";
  public startday = "";
  public endday = "";
  public fromdate = "";
  public todate = "";


  //Select staff
  optionList = [{ label: localStorage.getItem('stf_Name'), value: localStorage.getItem('stf_Cd')}];
  selectedValue = { label: localStorage.getItem('stf_Name'), value: localStorage.getItem('stf_Cd')};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);


  constructor() {
   }

  ngOnInit(): void {
  }

  search(){
  }
}
