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
  selectedValue = null;
  constructor() { }

  ngOnInit(): void {

  }

}
