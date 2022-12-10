import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api/messageservice';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent implements OnInit {

  isSpinning: boolean;

  constructor() {
    this.isSpinning = false;
  }

  ngOnInit(): void {
  }

}
