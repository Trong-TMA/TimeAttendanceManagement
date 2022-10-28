import { QuanLyNguoiHienMauService } from './../../shared/services/quan-ly-nguoi-hien-mau.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-danh-sach-hien-mau',
  templateUrl: './danh-sach-hien-mau.component.html',
  styleUrls: ['./danh-sach-hien-mau.component.scss'],
  providers: [MessageService]
})
export class DanhSachHienMauComponent implements OnInit {

  isSpinning: boolean;
  nguoihienmaulist: any;

  constructor(
    private qunalynguoihienmauService : QuanLyNguoiHienMauService,
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
      console.log(item);

      this.messageService.add({severity:'success', summary:'Cập nhật thành công!', detail:'Cập nhật dữ liệu từ server thành công!'});
      setTimeout(()=>{
        this.nguoihienmaulist = item;
        this.isSpinning = false;
      }, 1000)
    });
  }
  getNguoihienmau(){
    return this.qunalynguoihienmauService.getAll();
  }
}
