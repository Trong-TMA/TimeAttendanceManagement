import { ChamcongService } from './../../shared/services/chamcong.service';
import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/shared/models/staff.model';
import { MessageService } from 'primeng/api';
import { Checkinout } from 'src/app/shared/models/Checkinout.model';
@Component({
  selector: 'app-cham-cong',
  templateUrl: './cham-cong.component.html',
  styleUrls: ['./cham-cong.component.scss'],
  providers: [MessageService]
})
export class ChamCongComponent implements OnInit {

  isSpinning: boolean;
  listCheckinout: any;

  stff1 = new Staff('1','2022-11-13', true, false, '8:00', '');
  stff2 = new Staff('2','2022-11-12', true, false, '9:00', '');
  stff3 = new Staff('3','2022-11-11', true, false, '10:00', '');

  listOfStaff: Staff[] = [this.stff1,this.stff2,this.stff3];

  constructor(
    private  chamcongServices: ChamcongService,
    private messageService: MessageService) {
      this.isSpinning = false;
  }

  ngOnInit(): void {
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
    var in_Hh_Mm = rightNow.getHours() +":"+ rightNow.getMinutes();
    var message = "";

    const checkin  = new Checkinout(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      message,
      cio_Ymd,
      cio_Day,
      in_Hh_Mm,
      "",
    );

    console.log(checkin);

    return this.chamcongServices.checkin(checkin).subscribe((item)=>{
      console.log(item);
    });
  }

  checkout(){
    var rightNow = new Date();
    var cio_Ymd = rightNow.toISOString().slice(0,10).replace(/-/g,"");
    var cio_Day = rightNow.getDate().toString();
    var out_Hh_Mm = rightNow.getHours() +":"+ rightNow.getMinutes();
    var message = "";

    const checkin  = new Checkinout(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      message,
      cio_Ymd,
      cio_Day,
      "",
      out_Hh_Mm,
    );
    return this.chamcongServices.checkout(checkin).subscribe((item)=>{
      console.log(item);
    });
  }
}
