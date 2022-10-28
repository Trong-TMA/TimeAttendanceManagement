import { DonviService } from './../../../shared/services/donvi.service';
import { DonVi } from './../../../shared/models/donvi.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-don-vi-edit',
  templateUrl: './don-vi-edit.component.html',
  styleUrls: ['./don-vi-edit.component.scss'],
  providers: [FormBuilder]
})
export class DonViEditComponent implements OnInit {

  isSpinning: boolean;
  validateForm!: FormGroup;
  @Input() donvi: DonVi = new DonVi();
  @Output() loadDataEmit: EventEmitter<any>;


  constructor(
    private fb: FormBuilder,
    private donviService: DonviService) {
      this.loadDataEmit = new EventEmitter();
      this.isSpinning = false;
  }

  submitForm(){
    this.donvi.tenDonVi = this.validateForm.get("tendonvi")?.value;
    this.donvi.maDonVi = this.validateForm.get("madonvi")?.value;
    this.donvi.diachi = this.validateForm.get("diachi")?.value;
    return this.donviService.editDonvi(this.donvi).subscribe((item)=>{
      this.loadDataEmit.emit();
    });
  }

  loadDonvi(){
    this.loadDataEmit.emit();
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      tendonvi: [null],
      madonvi: [null],
      diachi: [null],
    });
  }
}
