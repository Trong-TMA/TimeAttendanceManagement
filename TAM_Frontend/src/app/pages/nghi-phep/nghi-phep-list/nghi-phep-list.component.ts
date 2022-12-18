import { Component, OnInit } from '@angular/core';

interface absence{
  date: any;
  duration: any;
  note: any;
}

@Component({
  selector: 'app-nghi-phep-list',
  templateUrl: './nghi-phep-list.component.html',
  styleUrls: ['./nghi-phep-list.component.scss']
})
export class NghiPhepListComponent implements OnInit {

  isSpinning = false
  listAbsence: absence[];
  constructor() {
    this.listAbsence = [{date:'20221215',duration:'00:00',note:'Nghỉ trừ phép'}]
  }


  ngOnInit(): void {

  }

}
