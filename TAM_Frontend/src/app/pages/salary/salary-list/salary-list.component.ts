import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.scss']
})
export class SalaryListComponent implements OnInit {


  isSpinning: boolean
  listSalary: any
  constructor() {
    this.isSpinning = false;
   }

  ngOnInit(): void {
  }

}
