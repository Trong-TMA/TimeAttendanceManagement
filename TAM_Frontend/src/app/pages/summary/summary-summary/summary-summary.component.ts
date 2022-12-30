import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-summary',
  templateUrl: './summary-summary.component.html',
  styleUrls: ['./summary-summary.component.scss']
})
export class SummarySummaryComponent implements OnInit {

  @Input() listSummary: any

  isSpinning = false;
  constructor() { }

  ngOnInit(): void {
    const summary = {year: '2022', month: '12', days:'2.80', times: '22.43', status: '1' }
    this.listSummary.push(summary);
  }

}
