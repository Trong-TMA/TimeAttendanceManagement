import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lich-su-cham-cong-edit-search',
  templateUrl: './lich-su-cham-cong-edit-search.component.html',
  styleUrls: ['./lich-su-cham-cong-edit-search.component.scss']
})
export class LichSuChamCongEditSearchComponent implements OnInit {

  @Input() idDpm: any;
  public idDepartment: any;
  public chckweek = false;
  public chckmonth = false;
  public chckdate = false;
  public value = null;
  public fromdate = null;
  public todate = null;

  isSpinning: boolean;
  cld: any;
  weeks: any[] = [];
  @Input() listCheckinout: any;
  @Output() loadDataEmit: EventEmitter<any>;
  public message = "";
  public radioValue = "week";
  public startday = "";
  public endday = "";
  display: boolean = false;


  //Select staff
  optionList = [{ label: localStorage.getItem('stf_Name'), value: localStorage.getItem('stf_Cd')}];
  selectedValue = { label: localStorage.getItem('stf_Name'), value: localStorage.getItem('stf_Cd')};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);


  constructor(private router: Router) {
      this.isSpinning = false;
      this.loadDataEmit = new EventEmitter();
  };


  ngOnInit(): void {
    this.idDepartment = this.idDpm;
  }

  search(event: any){

  }
  loadData(){

  }

  showDialog(){
    this.display = true;
  }
}
