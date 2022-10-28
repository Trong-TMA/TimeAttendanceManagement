import { DottonvinhService } from './../../shared/services/dottonvinh.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dot-ton-vinh',
  templateUrl: './dot-ton-vinh.component.html',
  styleUrls: ['./dot-ton-vinh.component.scss'],
  providers: [MessageService]
})
export class DotTonVinhComponent implements OnInit {


  isSpinning: boolean;
  dottonvinhlist: any;

  constructor(
    private dottonvinhService : DottonvinhService,
    private messageService: MessageService) {
      this.isSpinning = false;
    }

  ngOnInit(): void {
    this.loadDottonvinh();
  }



  loadDottonvinh(){
    this.isSpinning = true;
    this.getDottonvinh().subscribe((item)=>{
      this.messageService.add({severity:'success', summary:'Cập nhật thành công!', detail:'Cập nhật dữ liệu từ server thành công!'});
      setTimeout(()=>{
        this.dottonvinhlist = item;
        this.isSpinning = false;
      }, 1000)
    });
  }
  getDottonvinh(){
    return this.dottonvinhService.getAllDottonvinh();
  }



}
