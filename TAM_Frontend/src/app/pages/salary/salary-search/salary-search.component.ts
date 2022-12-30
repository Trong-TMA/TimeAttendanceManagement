import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salary-search',
  templateUrl: './salary-search.component.html',
  styleUrls: ['./salary-search.component.scss']
})
export class SalarySearchComponent implements OnInit {


  listOfYear: Array<Number> = [];
  listOfMonth: Array<Number> = [];
  public radioValue = 'chitietluong'
  constructor() { }

  ngOnInit(): void {
    this.getyear();
    this.getmonth();
  }

  getyear(){
    var rightNow = new Date();
    for (let index = 2020; index <= rightNow.getFullYear(); index++) {
      this.listOfYear.push(index);
    }
  }
  getmonth(){
    for (let index = 1; index <= 12; index++) {
      this.listOfMonth.push(index);
    }
  }
}
