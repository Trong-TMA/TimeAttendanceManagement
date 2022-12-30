import { Gcheckinout } from './../../shared/models/getCheckinout.model';
import { ChamcongService } from './../../shared/services/chamcong.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Checkinout } from 'src/app/shared/models/Checkinout.model';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cham-cong',
  templateUrl: './cham-cong.component.html',
  styleUrls: ['./cham-cong.component.scss'],
  providers: [MessageService]
})
export class ChamCongComponent implements OnInit {

  isSpinning = false;


  listCheckinout: Array<any> = [];
  items: any = [];
  stffVM: any;
  ipAddress = '';
  hidden  =  localStorage.getItem("Status");

  constructor(
    private http:HttpClient,
    private  chamcongServices: ChamcongService,
    private messageService: MessageService,
    private activatedRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getIPAddress();
    this.loadCheckinout();
  }

  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
    });
  }

  loadCheckinout(){
    this.isSpinning = true;
    return this.getCheckinout().subscribe((item:any)=>{
      this.messageService.add({severity:'success', summary:'Cập nhật thành công!',
      detail:'Cập nhật dữ liệu từ server thành công!'});
      //Time out for load data
      setTimeout(()=>{
        this.listCheckinout = item;
        this.isSpinning = false;
      }, 1000);
    });

  }

  checkout(){
    this.isSpinning = true;
    var rightNow = new Date();
    var cio_Ymd = rightNow.toISOString().slice(0,10).replace(/-/g,"");
    var cio_Day = rightNow.getDate().toString();
    var Hh_Mm = moment().format("HH:mm");
    var message = "";
    const checkout  = new Checkinout(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      message,
      cio_Ymd,
      cio_Day,
      Hh_Mm,
      this.ipAddress
    );
    return this.chamcongServices.checkout(checkout).subscribe((item: any)=>{
      setTimeout(() => {
        if(item.message === 'SUCCESS'){
          this.getState(cio_Ymd, cio_Day, Hh_Mm, this.ipAddress);
          console.log(this.hidden);
          this.loadCheckinout();
          this.isSpinning = false;
        }
      }, 1000);
    });
  }

  getState(cio_Ymd: any, cio_Day: any, Hh_Mm: any, ipadress: any){
    this.isSpinning = true;
    var message = "";
    const status  = new Checkinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
    localStorage.getItem("stf_Name") || '{}', message, cio_Ymd, cio_Day, Hh_Mm, ipadress);
    return this.chamcongServices.getstatus(status).subscribe((item:any)=>{
      this.hidden  = item.message;
      localStorage.setItem("Status", item.message);
      this.isSpinning = false;
    });
  }

  getCheckinout(){
    var rightNow = new Date();
    this.stffVM = new Gcheckinout(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      "",
      "",
      "",
      (rightNow.getMonth()+1).toString(),
      "month"
    );
    return this.chamcongServices.getcheckinout(this.stffVM);
  }

  loadCheckinoutSearch(items: any){
    this.isSpinning = true;
    setTimeout(() => {
      this.listCheckinout = items
      this.isSpinning = false;
    }, 1000);
  }
}
