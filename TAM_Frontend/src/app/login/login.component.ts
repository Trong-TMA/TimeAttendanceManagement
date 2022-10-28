import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginRequest, LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modelLogin: LoginRequest;
  isSpinning = false;
  errorMessage = "";
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.modelLogin = {
      username: '',
      password: '',
    }
  }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.modelLogin).subscribe(
      (res: any)=>{
        localStorage.setItem('token', res?.token);
        this.router.navigateByUrl('/dashboard/Danh-sach-hien-mau');
      },
      (error)=>{
        if(error.status == 400){
          this.errorMessage = "Tài khoản hoặc mật khẩu không đúng!"
        }
      }
      )
  }


}
