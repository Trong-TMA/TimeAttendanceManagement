import { DotTonVinh } from './../models/dottonvinh.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DottonvinhService {

  private _sharedHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private router: Router) {
      this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
  }

  getAllDottonvinh(){
    return this.http.get(`${environment.apiUrl}/api/DotTonVinh`, {headers: this._sharedHeaders});
  }

  createDottonvinh(dottonvinh: any){
    return this.http.post(`${environment.apiUrl}/api/DotTonVinh/create?madottonvinh=${dottonvinh}`,{headers: this._sharedHeaders,});
  }

  editDottonvinh(dottonvinh: any){
    return this.http.post(`${environment.apiUrl}/api/DotTonVinh/edit`,dottonvinh,{headers: this._sharedHeaders,});
  }

  deleteDottonvinh(iddottonvinh: any){
    return this.http.put(`${environment.apiUrl}/api/DotTonVinh/delete?DotTonVinhId=${iddottonvinh}`,{headers: this._sharedHeaders,});
  }
}
