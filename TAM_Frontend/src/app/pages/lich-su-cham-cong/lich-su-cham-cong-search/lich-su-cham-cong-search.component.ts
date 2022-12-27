import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GStaff } from 'src/app/shared/models/getStaff.model';
import { StaffService } from 'src/app/shared/services/staff.sevice';

@Component({
  selector: 'app-lich-su-cham-cong-search',
  templateUrl: './lich-su-cham-cong-search.component.html',
  styleUrls: ['./lich-su-cham-cong-search.component.scss']
})
export class LichSuChamCongSearchComponent implements OnInit {

  public value = null;
  public fromdate = null;
  public todate = null;

  isSpinning: boolean;
  @Input() listDpm: any;
  @Output() loadDataEmit: EventEmitter<any>;

  constructor() {
    this.loadDataEmit =  new EventEmitter();
    this.isSpinning = false;

  }

  ngOnInit(): void {
  }


}
