import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salary-search',
  templateUrl: './salary-search.component.html',
  styleUrls: ['./salary-search.component.scss']
})
export class SalarySearchComponent implements OnInit {


  listOfYear: any
  listOfMonth: any
  public radioValue = 'chitietluong'
  constructor() { }

  ngOnInit(): void {
  }

}
