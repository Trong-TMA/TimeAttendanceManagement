import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-summary-working-time',
  templateUrl: './summary-working-time.component.html',
  styleUrls: ['./summary-working-time.component.scss']
})
export class SummaryWorkingTimeComponent implements OnInit {

  @Input() listWorkingtime: any
  @Output() loadDataEmit: EventEmitter<any>;
  isSpinning = false;
  constructor() {
    this.loadDataEmit =  new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.listWorkingtime);
  }

  loadData(){
    this.loadDataEmit.emit();
  }

  convertMinsToHrsMins (minutes : any) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
  }
}
