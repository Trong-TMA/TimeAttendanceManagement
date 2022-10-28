import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private _sharedHeaders = new HttpHeaders();


  constructor() {
    this._sharedHeaders = this._sharedHeaders.set('Content-Type', 'application/json');
    this._sharedHeaders = this._sharedHeaders.set('Authorization', 'Bearer '+localStorage.getItem('token'));
   }
}
