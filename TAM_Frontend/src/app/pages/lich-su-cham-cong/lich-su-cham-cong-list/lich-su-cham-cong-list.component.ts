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

  show(){
    console.log("hihi");
    this.router.navigateByUrl('/dashboard/lich-su-cham-cong-edit');
  }

  ngOnInit(): void {

  }


}
