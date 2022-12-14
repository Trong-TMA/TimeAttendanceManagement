
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

  login(loginVM:any){
    return this.http.post(`${environment.apiUrl}/api/AutheApi/APIAUTLOG`, loginVM, {headers: this._sharedHeaders,});
  }
}
