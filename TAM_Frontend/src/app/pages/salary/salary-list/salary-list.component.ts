import { Salary } from './../../../shared/models/salary.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SalaryService } from 'src/app/shared/services/salary.service';
import { GSalary } from 'src/app/shared/models/getSalary.model';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.scss']
})
export class SalaryListComponent implements OnInit {

  @Input() salary: any;
  @Output() loadDataEmit: EventEmitter<any>;

  isSpinning: boolean;

  constructor() {
    this.loadDataEmit =  new EventEmitter();
    this.isSpinning = false;
  }

  ngOnInit(): void {
  }

}
