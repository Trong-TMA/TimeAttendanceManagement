import { Checkinout } from 'src/app/shared/models/Checkinout.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { getCLD } from '../models/getCLD.model';
export interface LoginRequest{
  username: string,
  password: string
}



@Injectable({
  providedIn: 'root'
})
export class ChamcongService {

  private _sharedHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private router: Router) {
      this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
  }

  getcheckinout(Gcheckinout:any){
    return this.http.post(`${environment.apiUrl}/api/CheckingApi/APIGETCHK`, Gcheckinout, {headers: this._sharedHeaders});
  }

  checkin(Checkinout: any){
    return this.http.post(`${environment.apiUrl}/api/CheckingApi/APICHKCIN`, Checkinout, {headers: this._sharedHeaders,});
  }

  checkout(Checkinout: any){
    return this.http.post(`${environment.apiUrl}/api/CheckingApi/APICHKCOU`, Checkinout, {headers: this._sharedHeaders,});
  }

  getstatus(Checkinout: any){
    return this.http.post(`${environment.apiUrl}/api/CheckingApi/APIGETSTT`, Checkinout, {headers: this._sharedHeaders,});
  }

  getcld(cld: getCLD){
    return this.http.post(`${environment.apiUrl}/api/CheckingApi/APIGETCLD`, cld , {headers: this._sharedHeaders,});
  }
}
