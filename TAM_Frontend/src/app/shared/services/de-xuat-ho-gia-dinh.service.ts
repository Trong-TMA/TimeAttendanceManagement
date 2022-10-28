import { debounceTime } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeXuatHoGiaDinhService {
  public get http(): HttpClient {
    return this._http;
  }
  public set http(value: HttpClient) {
    this._http = value;
  }

  private _sharedHeaders = new HttpHeaders();
  constructor(
    private _http: HttpClient,
    private router: Router) {
      this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
  }

  import(dottonvinhid: any, donviid: any, file: FormData){
    return this.http
    .post(`${environment.apiUrl}/api/QuanLyHoGiaDinh/Import?DotTonVinhId=${dottonvinhid}&DonviId=${donviid}`,file,{
      responseType: 'json'
    }).pipe(debounceTime(1000));
  }

  save(dottonvinhid: any, donviid: any, listnguoihienmau: any){
    return this.http.post(`${environment.apiUrl}/api/TonVinhNguoiHienMau/SaveChanges?DottonvinhId=${dottonvinhid}&DonViId=${donviid}`,listnguoihienmau,{headers: this._sharedHeaders,});
  }
}
