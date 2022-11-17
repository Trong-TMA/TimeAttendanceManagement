import { Checkinout } from './../../../shared/models/Checkinout.model';
import { ChamcongService } from './../../../shared/services/chamcong.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Staff } from 'src/app/shared/models/staff.model';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-cham-cong-list',
  templateUrl: './cham-cong-list.component.html',
  styleUrls: ['./cham-cong-list.component.scss']
})

export class ChamCongListComponent implements OnInit {

  isSpinning: boolean;
  @Input() listCheckinout: any;
  @Output() loadDataEmit: EventEmitter<any>;

  display: boolean = false;

  constructor(private chamcongServices: ChamcongService,
    private modal: NzModalService) {
    this.loadDataEmit =  new EventEmitter();
    this.isSpinning = false;
  }

  ngOnInit(): void {
  }

  showDialog() {
      this.display = true;
  }

}
