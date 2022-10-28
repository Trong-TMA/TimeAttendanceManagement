import { MessageService } from 'primeng/api';
import { DonviService } from './../../shared/services/donvi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-don-vi',
  templateUrl: './don-vi.component.html',
  styleUrls: ['./don-vi.component.scss'],
  providers: [MessageService]
})
export class DonViComponent implements OnInit {

  isSpinning: boolean;
  donvilist: any;

  constructor(
    private donviService : DonviService,
    private messageService: MessageService) {
      this.isSpinning = false;
    }

  ngOnInit(): void {
    this.loadDonvi();
  }



  loadDonvi(){
    this.isSpinning = true;
    this.getDonvi().subscribe((item)=>{
      console.log(item);

      this.messageService.add({severity:'success', summary:'Cập nhật thành công!', detail:'Cập nhật dữ liệu từ server thành công!'});
      setTimeout(()=>{
        this.donvilist = item;
        this.isSpinning = false;
      }, 1000)
    });
  }
  getDonvi(){
    return this.donviService.getAllDonvi();
  }



}
