import { DonVi } from './../../../shared/models/donvi.model';
import { DonviService } from './../../../shared/services/donvi.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-don-vi-list',
  templateUrl: './don-vi-list.component.html',
  styleUrls: ['./don-vi-list.component.scss']
})
export class DonViListComponent implements OnInit {

  isSpinning: boolean;
  @Input() listDonvi: any;
  @Output() loadDataEmit: EventEmitter<any>;

  isVisible = false;
  dv: DonVi = new DonVi();

  constructor(private donviService: DonviService,private modal: NzModalService) {
    this.loadDataEmit =  new EventEmitter();
    this.isSpinning = false;
  }

  ngOnInit(): void {
  }

  loadDottonvinh(){
    this.loadDataEmit.emit();
  }

  deleteDV(item: any){
    this.isSpinning = true;
    this.donviService.deleteDonvi(item?.id).subscribe((item)=>{
      this.loadDataEmit.emit();
    })

  }

  showModal(item: any){
    this.isVisible = true;
    this.dv.id = item.id;
    this.dv.tenDonVi = item.tenDonVi;
    this.dv.maDonVi = item.maDonVi;
    this.dv.diachi = item.diachi;
  }


  handleCancel(): void {
    this.isVisible = false;
  }


}
