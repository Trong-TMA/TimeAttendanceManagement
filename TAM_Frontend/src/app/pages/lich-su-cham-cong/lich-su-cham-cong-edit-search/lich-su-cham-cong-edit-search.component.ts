import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lich-su-cham-cong-edit-search',
  templateUrl: './lich-su-cham-cong-edit-search.component.html',
  styleUrls: ['./lich-su-cham-cong-edit-search.component.scss']
})
export class LichSuChamCongEditSearchComponent implements OnInit {

  public chckweek = false;
  public chckmonth = false;
  public chckdate = false;
  public value = null;
  public fromdate = null;
  public todate = null;

  optionListDept = [
    { label: 'Dept 4', value: '01'},
    { label: 'Dept5', value: '02'}
  ];

  selectedValueDept = { label: 'Dept 4', value: '01'};

  optionListStaff = [
    { label: '++Võ Minh Trọng', value: '01'},
    { label: '++Hoàng Minh Nhân', value: '02'}
  ];
  selectedValueStaff = { label: '++Võ Minh Trọng', value: '01'};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  constructor() { }

  ngOnInit(): void {

  }

}
