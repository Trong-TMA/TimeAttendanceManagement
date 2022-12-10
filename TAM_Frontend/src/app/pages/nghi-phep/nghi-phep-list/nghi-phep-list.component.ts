import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nghi-phep-list',
  templateUrl: './nghi-phep-list.component.html',
  styleUrls: ['./nghi-phep-list.component.scss']
})
export class NghiPhepListComponent implements OnInit {

  isSpinning = false
  listAbsence: any;
  constructor() { }

  ngOnInit(): void {
  }

}
