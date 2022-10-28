import { DotTonVinh } from './../../../shared/models/dottonvinh.model';
import { DottonvinhService } from './../../../shared/services/dottonvinh.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dot-ton-vinh-list',
  templateUrl: './dot-ton-vinh-list.component.html',
  styleUrls: ['./dot-ton-vinh-list.component.scss']
})
export class DotTonVinhListComponent implements OnInit {

  isSpinning: boolean;
  @Input() listDottonvinh: any;
  @Output() loadDataEmit: EventEmitter<any>;

  isVisible = false;
  dtv: DotTonVinh = new DotTonVinh;

  constructor(private dottovinhService: DottonvinhService,private modal: NzModalService) {
    this.loadDataEmit =  new EventEmitter();
    this.isSpinning = false;
  }

  ngOnInit(): void {
  }

  loadDottonvinh(){
    this.loadDataEmit.emit();
  }

  deleteDTV(item: any){
    this.isSpinning = true;
    this.dottovinhService.deleteDottonvinh(item?.id).subscribe((item)=>{
      this.loadDataEmit.emit();
    })

  }

  showModal(item: any){
    this.isVisible = true;
    this.dtv.id = item.id;
    this.dtv.name = item.tenDotTonVinh;
    this.dtv.code = item.maDotTonVinh;
  }


  handleOk(){
    this.isVisible = false;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
}
