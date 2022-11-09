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
    this.loginService.login(this.modelLogin.username,this.modelLogin.password).subscribe(
        (res: any)=>{
          console.log(res?.stf_Cd);

          if(res?.stf_Cd != null){
            localStorage.setItem('token', res?.stf_Cd);
            this.router.navigateByUrl('/dashboard');
          }
          else {
            this.errorMessage = res?.message;
          }
        }
      )
  }


}
