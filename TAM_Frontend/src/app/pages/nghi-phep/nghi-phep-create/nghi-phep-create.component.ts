import { Regisabsence } from './../../../shared/models/Regisabsence.model';
import { Absence } from './../../../shared/models/absence.model';
import { NghiPhepService } from './../../../shared/services/nghiphep.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nghi-phep-create',
  templateUrl: './nghi-phep-create.component.html',
  styleUrls: ['./nghi-phep-create.component.scss'],
  providers: [FormBuilder]
})
export class NghiPhepCreateComponent implements OnInit {

  isSpinning: boolean;
  validateForm!: FormGroup;
  startday: any
  endday:any
  state = 0;
  Abs: Absence = new Absence;
  @Input() absence: Absence = new Absence();
  @Output() loadDataEmit: EventEmitter<any>;

  constructor(
    private nghiphpeService: NghiPhepService,
    private fb: FormBuilder,
    private router: Router) {
      this.loadDataEmit = new EventEmitter();
      this.isSpinning = false;

    }

  ngOnInit(){
    this.loadData();
    this.validateForm = this.fb.group({
      staff: [localStorage.getItem('stf_Name'),[Validators.required]],
      dept:[localStorage.getItem('stf_Dpm_Cd'),[Validators.required]],
      alc_Ymd:[this.absence.cio_Ymd],
      in_Hh_Mm: [this.absence.in_Hh_Mm],
      out_Hh_Mm: [this.absence.out_Hh_Mm],
      state: [0, [Validators.required]],
      reason: [null, [Validators.required]]
    });
  }

  loadData(){
    this.loadDataEmit.emit();
  }

  convertMinsToHrsMins (minutes : any) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
  }

  submitForm(){
    this.isSpinning = true;
    const regisabsence = new Regisabsence(localStorage.getItem("stf_Cd") || '', localStorage.getItem("stf_Dpm_Cd") || '',
      localStorage.getItem("stf_Name") || '',"", this.absence.cio_Cd?.toString(), this.validateForm.get("state")?.value, this.validateForm.get("alc_Ymd")?.value || '',
      this.absence.in_Hh_Mm || '',this.absence.out_Hh_Mm || '', this.validateForm.get("reason")?.value || '');
    this.nghiphpeService.registerabsence(regisabsence).subscribe((item)=>{
      this.loadDataEmit.emit();
      this.validateForm = this.fb.group({
        staff: [null,[Validators.required]],
        dept:[null,[Validators.required]],
        alc_Ymd:[null],
        in_Hh_Mm: [null],
        out_Hh_Mm: [null],
      });
      this.router.navigate(["/nghi-phep"], {
        skipLocationChange: true,
        queryParams:{
          id: ''
        }
      })
    })

  }



}
