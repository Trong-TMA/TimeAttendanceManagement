import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {


  isSpinning = false;

  constructor() { }

  ngOnInit(): void {
  }

  confirm(){}

}
