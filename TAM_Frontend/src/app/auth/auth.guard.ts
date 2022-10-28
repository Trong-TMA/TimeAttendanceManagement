import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(private router: Router){}


  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //     if(this.isTokenExpired()){
  //       localStorage.removeItem('token');
  //       this.router.navigateByUrl('/login');
  //       return false
  //     }
  //     return true;
  // }


  // isTokenExpired() {
  //   const token = localStorage.getItem('token');
  //   const helper = new JwtHelperService();
  //   return token && helper.isTokenExpired(token);
  // }

}
