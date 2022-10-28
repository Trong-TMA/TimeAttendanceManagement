import { QuanLyNguoiHienMauService } from './../../../shared/services/quan-ly-nguoi-hien-mau.service';
import { DeXuatNguoiHienMauService } from './../../../shared/services/de-xuat-nguoi-hien-mau.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NguoiHienMau } from 'src/app/shared/models/nguoihienmau.model';

@Component({
  selector: 'app-lich-su-ton-vinh-list',
  templateUrl: './lich-su-ton-vinh-list.component.html',
  styleUrls: ['./lich-su-ton-vinh-list.component.scss']
})
export class LichSuTonVinhListComponent implements OnInit {

  isSpinning: boolean;
  @Input() Listnguoihienmau: any;
  @Output() loadDataEmit: EventEmitter<any>;

  isVisible = false;
  nguoihien: NguoiHienMau = new NguoiHienMau();

  constructor(private modal: NzModalService,
    private quanlynguoihienmauService : QuanLyNguoiHienMauService) {
    this.loadDataEmit =  new EventEmitter();
    this.isSpinning = false;
  }

  ngOnInit(): void {
  }


  loadDottonvinh(){
    this.loadDataEmit.emit();
  }

  deleteHM(item: any){
    this.isSpinning = true;
    this.quanlynguoihienmauService.deleteNguoihienmau(item?.id).subscribe((item)=>{
      this.loadDataEmit.emit();
    })
  }


  showModal(item: any){
    this.isVisible = true;
    this.nguoihien.Id = item.id
    this.nguoihien.HoTen = item.hoTen
    this.nguoihien.GioiTinh = item.gioiTinh
    this.nguoihien.NamSinh = item.namSinh
    this.nguoihien.NgheNghiep = item.ngheNghiep
    this.nguoihien.DiaChi = item.diaChi
    this.nguoihien.NhomMau = item.nhomMau
    this.nguoihien.TV = item.tv
  }


  handleCancel(): void {
    this.isVisible = false;
  }

  showGender(gend:any){
    if(gend == true){
      return "Nam"
    }
    else{
      return "Nữ"
    }
  }
}
