import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private _sharedHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private router: Router) {
      this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
  }

  getsalary(Gabsence:any){
    return this.http.post(`${environment.apiUrl}/api/SummaryApi/APIGETSAL`, Gabsence, {headers: this._sharedHeaders});
  }

  calsalary(salary: any){
    return this.http.post(`${environment.apiUrl}/api/SummaryApi/APICALSAL`, salary, {headers: this._sharedHeaders});
  }


}
