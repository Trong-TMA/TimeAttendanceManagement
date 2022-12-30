import { ChamcongService } from './../shared/services/chamcong.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkinout } from '../shared/models/Checkinout.model';

import { LoginRequest, LoginService } from '../shared/services/login.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Login } from '../shared/models/Login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modelLogin: LoginRequest;
  isSpinning = false;
  errorMessage = "";
  ipAddress = '';
  constructor(
    private loginService: LoginService,
    private chamcongServices : ChamcongService,
    private http:HttpClient,
    private router: Router
  ) {
    this.modelLogin = {
      username: '',
      password: '',
    }
  }

  ngOnInit(): void {
    this.getIPAddress();
  }

  getIPAddress()
  {
    return this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
      console.log(this.ipAddress);

    });
  }

  checkin(){
    this.isSpinning = true;
    var rightNow = new Date();
    var cio_Ymd = rightNow.toISOString().slice(0,10).replace(/-/g,"");
    var cio_Day = rightNow.getDate().toString();
    var Hh_Mm = moment().format("HH:mm");
    var message = "";
    const checkin  = new Checkinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}', message, cio_Ymd, cio_Day,  Hh_Mm, this.ipAddress);
    this.chamcongServices.checkin(checkin).subscribe((item : any)=>{
      this.getState(cio_Ymd, cio_Day, Hh_Mm, this.ipAddress);
    });
  }

  getState(cio_Ymd: any, cio_Day: any, Hh_Mm: any, ipadress: any){
    this.isSpinning = true;
    var message = "";
    const status  = new Checkinout(localStorage.getItem("stf_Cd") || '{}', localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}', message, cio_Ymd, cio_Day, Hh_Mm, ipadress);
    this.chamcongServices.getstatus(status).subscribe((item:any)=>{
      setTimeout(() => {
        if(item?.message === "-1" ){
          localStorage.clear();
          this.router.navigateByUrl('/login');
          this.errorMessage = "Vui lòng kết nối với mạng nội bộ";
          this.isSpinning = false;
        }
        else{
          localStorage.setItem("Status", item?.message);
          this.router.navigateByUrl('/dashboard/cham-cong');
          this.isSpinning = false;
        }
      }, 2000);
    });
  }
  login(){
    this.loginService.login(new Login(this.modelLogin.username, this.modelLogin.password)).subscribe(
        (res: any)=>{
          if(res?.stf_Cd != null){
            localStorage.setItem('stf_Cd', res?.stf_Cd);
            localStorage.setItem('stf_Dpm_Cd', res?.stf_Dpm_Cd);
            localStorage.setItem('stf_Name', res?.stf_Name);
            this.checkin();
          }
          else {
            this.router.navigateByUrl('/login');
            this.errorMessage = res?.message;
          }
        }
      );
  }

}
