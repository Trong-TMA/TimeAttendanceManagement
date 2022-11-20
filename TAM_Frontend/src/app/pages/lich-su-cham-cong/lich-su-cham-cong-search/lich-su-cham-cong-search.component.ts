import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lich-su-cham-cong-search',
  templateUrl: './lich-su-cham-cong-search.component.html',
  styleUrls: ['./lich-su-cham-cong-search.component.scss']
})
export class LichSuChamCongSearchComponent implements OnInit {

  public value = null;
  public fromdate = null;
  public todate = null;

  optionList = [
    { label: 'Dept 4', value: '01'},
    { label: 'Dept5', value: '02'}
  ];
  selectedValue = { label: '++Võ Minh Trọng', value: '01'};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);
  constructor() { }

  ngOnInit(): void {
  }

}
