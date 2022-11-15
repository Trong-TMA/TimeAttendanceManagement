import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  getcheckinout(stf_Cd:any, stf_Dpm_Cd: any){
    return this.http.get(`${environment.apiUrl}/api/CheckingApi/APIGETCHKINOU?stf_Cd=${stf_Cd}&stf_Dpm_Cd=${stf_Dpm_Cd}`, {headers: this._sharedHeaders});
  }

  checkin(Checkinout: any){
    this.http.post(`${environment.apiUrl}/api/CheckingApi/APICHKCIN`, Checkinout, {headers: this._sharedHeaders,});
  }

  checkout(Checkinout: any){
    this.http.post(`${environment.apiUrl}/api/CheckingApi/APICHKCOU`, Checkinout, {headers: this._sharedHeaders,});
  }


}
