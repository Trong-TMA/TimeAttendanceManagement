import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-search',
  templateUrl: './summary-search.component.html',
  styleUrls: ['./summary-search.component.scss']
})
export class SummarySearchComponent implements OnInit {

  listOfYear: Array<Number> = [];
  listOfMonth: Array<Number> = [];
  nameStaff = localStorage.getItem('stf_Name');

  constructor() {

  }

  ngOnInit(): void {
    this.getyear();
    this.getmonth();
  }

  getyear(){
    var rightNow = new Date();
    for (let index = 1990; index <= rightNow.getFullYear(); index++) {
      this.listOfYear.push(index);
    }
  }
  getmonth(){
    for (let index = 1; index <= 12; index++) {
      this.listOfMonth.push(index);
    }
  }

}
