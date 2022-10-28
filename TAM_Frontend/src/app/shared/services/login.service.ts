import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

export interface LoginRequest{
  username: string,
  password: string
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _sharedHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private router: Router) {
      this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
  }

  login(req: LoginRequest){
      return this.http.post(`${environment.apiUrl}/api/Account/Login`,req,{headers: this._sharedHeaders,});
  }
}
