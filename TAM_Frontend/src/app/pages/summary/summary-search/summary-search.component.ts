import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-search',
  templateUrl: './summary-search.component.html',
  styleUrls: ['./summary-search.component.scss']
})
export class SummarySearchComponent implements OnInit {

  listOfYear: any
  listOfMonth: any
  nameStaff = localStorage.getItem('stf_Name')


  constructor() { }

  ngOnInit(): void {
  }

}
