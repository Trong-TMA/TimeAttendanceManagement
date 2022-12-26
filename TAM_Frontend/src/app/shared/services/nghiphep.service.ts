import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class NghiPhepService {

  private _sharedHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private router: Router) {
      this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
  }

  getabsence(Gabsence:any){
    return this.http.post(`${environment.apiUrl}/api/AbsenceApi/APIGETABS`, Gabsence, {headers: this._sharedHeaders});
  }

  registerabsence(absence: any){
    return this.http.post(`${environment.apiUrl}/api/AbsenceApi/APIREGABS`, absence, {headers: this._sharedHeaders});
  }

}
