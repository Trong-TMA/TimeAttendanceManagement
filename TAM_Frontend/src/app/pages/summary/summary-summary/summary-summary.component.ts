import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-summary',
  templateUrl: './summary-summary.component.html',
  styleUrls: ['./summary-summary.component.scss']
})
export class SummarySummaryComponent implements OnInit {

  @Input() listWorkingTime: any

  isSpinning = false;
  constructor() { }

  ngOnInit(): void {
  }

}
