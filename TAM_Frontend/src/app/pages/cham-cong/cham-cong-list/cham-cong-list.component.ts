import { Checkinout } from './../../../shared/models/Checkinout.model';
import { ChamcongService } from './../../../shared/services/chamcong.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InfStaff } from 'src/app/shared/models/infstaff.model';
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

  convertMinsToHrsMins (minutes : any) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
  }
}
