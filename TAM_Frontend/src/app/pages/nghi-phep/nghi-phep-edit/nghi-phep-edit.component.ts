import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nghi-phep-edit',
  templateUrl: './nghi-phep-edit.component.html',
  styleUrls: ['./nghi-phep-edit.component.scss']
})
export class NghiPhepEditComponent implements OnInit {

  isSpinning: boolean;
  validateForm!: FormGroup;
  radioValue : any
  startday: any
  endday:any
  @Output() loadDataEmit: EventEmitter<any>;

  constructor(
    private fb: FormBuilder,
    private router: Router,

    ) {
      this.loadDataEmit = new EventEmitter();
      this.isSpinning = false;
  }
  submitForm(){

  }

  loadData(){
    this.loadDataEmit.emit();
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      staff: [localStorage.getItem('stf_Name'),[Validators.required]],
      dept:[localStorage.getItem('stf_Dpm_Cd'),[Validators.required]],
    });
  }

}
