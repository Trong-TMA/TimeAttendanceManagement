import { Component, OnInit } from '@angular/core';
import { Gabsence } from 'src/app/shared/models/getAbsence.model';
import { NghiPhepService } from 'src/app/shared/services/nghiphep.service';

@Component({
  selector: 'app-nghi-phep',
  templateUrl: './nghi-phep.component.html',
  styleUrls: ['./nghi-phep.component.scss']
})
export class NghiPhepComponent implements OnInit {


  isSpinning: boolean;
  listAbsence: Array<any> = [];
  stffVM: any;

  constructor(private nghiphepService: NghiPhepService) {
    this.isSpinning = false;
  }

  ngOnInit(): void {
    this.loadAbsence();
  }

  loadAbsence(){
    this.isSpinning = true;
    return this.getAbsence().subscribe((item:any)=>{
      //Time out for load data
      setTimeout(()=>{
        this.listAbsence = item;
        this.isSpinning = false;
      }, 1000);
    });
  }

  getAbsence(){
    var rightNow = new Date();
    this.stffVM = new Gabsence(
      localStorage.getItem("stf_Cd") || '{}',
      localStorage.getItem("stf_Dpm_Cd") || '{}',
      localStorage.getItem("stf_Name") || '{}',
      "",
      (rightNow.getMonth()+1).toString(),
    );
    return this.nghiphepService.getabsence(this.stffVM);
  }

}
