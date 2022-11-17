import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cham-cong-search',
  templateUrl: './cham-cong-search.component.html',
  styleUrls: ['./cham-cong-search.component.scss']
})
export class ChamCongSearchComponent implements OnInit {

  public chckweek = false;
  public chckmonth = false;
  public chckdate = false;
  public value = null;
  public fromdate = null;
  public todate = null;

  optionList = [
    { label: '++Võ Minh Trọng', value: '01'},
    { label: '++Hoàng Minh Nhân', value: '02'}
  ];
  selectedValue = { label: '++Võ Minh Trọng', value: '01'};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  constructor() { }

  ngOnInit(): void {

  }

}
