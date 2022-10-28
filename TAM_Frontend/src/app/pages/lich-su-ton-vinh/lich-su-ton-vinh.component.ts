import { QuanLyNguoiHienMauService } from './../../shared/services/quan-ly-nguoi-hien-mau.service';
import { DeXuatNguoiHienMauService } from './../../shared/services/de-xuat-nguoi-hien-mau.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lich-su-ton-vinh',
  templateUrl: './lich-su-ton-vinh.component.html',
  styleUrls: ['./lich-su-ton-vinh.component.scss'],
  providers: [MessageService]
})
export class LichSuTonVinhComponent implements OnInit {

  isSpinning: boolean;
  nguoihienmaulist: any;

  constructor(
    private quanlynguoihienmauService : QuanLyNguoiHienMauService,
    private messageService: MessageService) {
      this.isSpinning = false;
    }

  ngOnInit(): void {
    this.loadNguoiHienMau();
  }

  loadNguoiHienMauSearch(items: any){
    this.nguoihienmaulist = items
  }


  loadNguoiHienMau(){
    this.isSpinning = true;
    this.getNguoihienmau().subscribe((item)=>{
      this.messageService.add({severity:'success', summary:'Cập nhật thành công!', detail:'Cập nhật dữ liệu từ server thành công!'});
      setTimeout(()=>{
        this.nguoihienmaulist = item;
        this.isSpinning = false;
      }, 1000)
    });
  }
  getNguoihienmau(){
    return this.quanlynguoihienmauService.getAll();
  }

}
