import { ChamcongService } from './../shared/services/chamcong.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Checkinout } from '../shared/models/Checkinout.model';

import { LoginRequest, LoginService } from '../shared/services/login.service';
import { HttpClient } from '@angular/common/http';

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
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
    });
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
    console.log(checkin);

    return this.chamcongServices.checkin(checkin).subscribe((item: any)=>{
      if(item?.message === "ERROR"){
        this.router.navigateByUrl('/login');
        this.errorMessage = "Please connect local";
      }
      else{
        this.router.navigateByUrl('/dashboard/cham-cong');
      }
    });
  }
  login(){
    this.loginService.login(this.modelLogin.username,this.modelLogin.password).subscribe(
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
