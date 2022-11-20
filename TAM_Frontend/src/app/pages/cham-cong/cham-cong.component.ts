import { ChamcongService } from './../../shared/services/chamcong.service';
import { Component, OnInit } from '@angular/core';
import { InfStaff } from 'src/app/shared/models/infstaff.model';
import { MessageService } from 'primeng/api';
import { Checkinout } from 'src/app/shared/models/Checkinout.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cham-cong',
  templateUrl: './cham-cong.component.html',
  styleUrls: ['./cham-cong.component.scss'],
  providers: [MessageService]
})
export class ChamCongComponent implements OnInit {

  isSpinning: boolean;
  listCheckinout: any;

  stff1 = new InfStaff('1','2022-11-13', true, false, '8:00', '');
  stff2 = new InfStaff('2','2022-11-12', true, false, '9:00', '');
  stff3 = new InfStaff('3','2022-11-11', true, false, '10:00', '');

  listOfStaff: InfStaff[] = [this.stff1,this.stff2,this.stff3];
  ipAddress = '';
  constructor(
    private http:HttpClient,
    private  chamcongServices: ChamcongService,
    private messageService: MessageService) {
      this.isSpinning = false;
  }

  ngOnInit(): void {
    this.getIPAddress();
    this.getStatus();
  }

  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
    });
  }

  loadCheckinout(){
    this.isSpinning = true;
    this.getCheckinout().subscribe((item)=>{
      this.messageService.add({severity:'success', summary:'Cập nhật thành công!', detail:'Cập nhật dữ liệu từ server thành công!'});
      setTimeout(()=>{
        this.listCheckinout = item;
        this.isSpinning = false;
      }, 1000)
    });
  }


  getCheckinout(){
    return this.chamcongServices.getcheckinout(localStorage.getItem("stf_Cd"),localStorage.getItem("stf_Dpm_Cd"));
  }

  checkin(){
    var rightNow = new Date();
    var cio_Ymd = rightNow.toISOString().slice(0,10).replace(/-/g,"");
    var cio_Day = rightNow.getDate().toString();
    var Hh_Mm = rightNow.getHours() +":"+ rightNow.getMinutes();
    var message = "";
    const checkin  = new Checkinout(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      message,
      cio_Ymd,
      cio_Day,
      Hh_Mm,
      this.ipAddress
    );
    return this.chamcongServices.checkin(checkin).subscribe((item)=>{
      console.log(item);
    });
  }

  checkout(){
    var rightNow = new Date();
    var cio_Ymd = rightNow.toISOString().slice(0,10).replace(/-/g,"");
    var cio_Day = rightNow.getDate().toString();
    var Hh_Mm = rightNow.getHours() +":"+ rightNow.getMinutes();
    var message = "";
    console.log(this.ipAddress);
    const checkin  = new Checkinout(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      message,
      cio_Ymd,
      cio_Day,
      Hh_Mm,
      this.ipAddress
    );
    return this.chamcongServices.checkout(checkin).subscribe((item)=>{
      console.log(item);
    });
  }

  getStatus(){
    var rightNow = new Date();
    var cio_Ymd = rightNow.toISOString().slice(0,10).replace(/-/g,"");
    var cio_Day = rightNow.getDate().toString();
    var Hh_Mm = rightNow.getHours() +":"+ rightNow.getMinutes();
    var message = "";
    const checkin  = new Checkinout(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      message,
      cio_Ymd,
      cio_Day,
      Hh_Mm,
      this.ipAddress,
    );
    return this.chamcongServices.getstatus(checkin).subscribe((item)=>{
      console.log(item);
    });
  }
}
