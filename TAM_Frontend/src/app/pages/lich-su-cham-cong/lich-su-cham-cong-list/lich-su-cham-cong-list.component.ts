import { Staff } from './../../../shared/models/staff.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lich-su-cham-cong-list',
  templateUrl: './lich-su-cham-cong-list.component.html',
  styleUrls: ['./lich-su-cham-cong-list.component.scss']
})
export class LichSuChamCongListComponent implements OnInit {

  isSpinning: boolean;
  @Input() listDpm: any;
  @Output() loadDataEmit: EventEmitter<any>;

  constructor(private router: Router) {
    this.loadDataEmit =  new EventEmitter();
    this.isSpinning = false;

  }



  show(idDpm: any){
    this.router.navigate(['/dashboard/lich-su-cham-cong-edit'], {
      skipLocationChange: true,
      queryParams:{
        id: idDpm
      }
    })
  }

  ngOnInit(): void {
  }


}
