import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-working-time',
  templateUrl: './summary-working-time.component.html',
  styleUrls: ['./summary-working-time.component.scss']
})
export class SummaryWorkingTimeComponent implements OnInit {

  @Input() listWorkingTime: any
  isSpinning = false;

  constructor() { }

  ngOnInit(): void {
  }

}
