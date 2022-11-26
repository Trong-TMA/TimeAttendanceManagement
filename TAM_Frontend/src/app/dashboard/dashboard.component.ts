import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public role: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem("stf_Dpm_Cd");
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
