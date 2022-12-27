import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private _sharedHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private router: Router) {
      this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
  }

  getSummary(summary:any){
    return this.http.post(`${environment.apiUrl}/api/SummaryApi/APIGETSAL`, summary, {headers: this._sharedHeaders});
  }

  regisSummary(summary:any){
    return this.http.post(`${environment.apiUrl}/api/SummaryApi/APIREGSMR`, summary, {headers: this._sharedHeaders});
  }

  callSummary(summary:any){
    return this.http.post(`${environment.apiUrl}/api/SummaryApi/APICALSAL`, summary, {headers: this._sharedHeaders});
  }

}
