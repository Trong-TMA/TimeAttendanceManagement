import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/shared/models/staff.model';

@Component({
  selector: 'app-cham-cong-list',
  templateUrl: './cham-cong-list.component.html',
  styleUrls: ['./cham-cong-list.component.scss']
})
export class ChamCongListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  stff1 = new Staff('1','2022-11-13', true, false, '8:00', '');
  stff2 = new Staff('2','2022-11-12', true, false, '9:00', '');
  stff3 = new Staff('3','2022-11-11', true, false, '10:00', '');

  listOfStaff: Staff[] = [this.stff1,this.stff2,this.stff3];


  display: boolean = false;

  showDialog() {
      this.display = true;
  }
}
