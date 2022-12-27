import { Salary } from './../../shared/models/salary.model';
import { GSalary } from './../../shared/models/getSalary.model';
import { SalaryService } from './../../shared/services/salary.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api/messageservice';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent implements OnInit {

  isSpinning: boolean;
  salary: Salary = new Salary();
  SalaryVm: any;

  constructor(private salaryService: SalaryService) {
    this.isSpinning = false;
  }

  ngOnInit(): void {
    this.loadSalary();
  }

  loadSalary(){
    this.isSpinning = true;
    return this.getSalary().subscribe((item:any)=>{
      setTimeout(()=>{
        this.salary.st_Map_Cd= item.st_Map_Cd;
        this.salary.st_Year= item.st_Year;
        this.salary.st_Month= item.st_Month;
        this.salary.st_Days= item.st_Days;
        this.salary.st_Times= item.st_Times;
        this.salary.st_Allowance= item.st_Allowance;
        this.salary.st_Bonus= item.st_Bonus;
        this.salary.st_Total= item.st_Total;
        this.salary.taManager= item.taManager;
        this.salary.delete_Ymd= item.delete_Ymd;
        this.salary.insert_Ymd= item.insert_Ymd;
        this.salary.update_Ymd= item.update_Ymd;
        this.salary.insert_Psn_Cd= item.insert_Psn_Cd;
        this.isSpinning = false;
      },1000);
    });
  }

  getSalary(){
    this.isSpinning = true;
    this.SalaryVm = new GSalary(localStorage.getItem("stf_Cd") || '',
    localStorage.getItem("stf_Dpm_Cd") || '',
    localStorage.getItem("stf_Name") || '',"");
    return this.salaryService.getsalary(this.SalaryVm);
  }
}
