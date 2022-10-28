import { DonVi } from 'src/app/shared/models/donvi.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonviService {

  private _sharedHeaders = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private router: Router) {
      this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');

  }

  getAllDonvi(){
    return this.http.get(`${environment.apiUrl}/api/DonVi`, {headers: this._sharedHeaders});
  }

  createDonvi(donvi:any){
    return this.http.post(`${environment.apiUrl}/api/DonVi/create`,donvi,{headers: this._sharedHeaders,});
  }
  editDonvi(donvi:any){
    return this.http.post(`${environment.apiUrl}/api/DonVi/edit`,donvi,{headers: this._sharedHeaders,});
  }
  deleteDonvi(iddonvi:any){
    return this.http.put(`${environment.apiUrl}/api/DonVi/delete?DonViId=${iddonvi}`,{headers: this._sharedHeaders,});
  }
}
