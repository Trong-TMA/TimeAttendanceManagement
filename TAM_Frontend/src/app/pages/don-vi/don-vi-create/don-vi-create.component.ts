import { DonVi } from 'src/app/shared/models/donvi.model';

import { DonviService } from './../../../shared/services/donvi.service';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-don-vi-create',
  templateUrl: './don-vi-create.component.html',
  styleUrls: ['./don-vi-create.component.scss'],
  providers: [FormBuilder]
})
export class DonViCreateComponent implements OnInit {

  isVisible = false;
  validateForm!: FormGroup;
  @Input() donvi: DonVi = new DonVi();
  @Output() loadDataEmit: EventEmitter<any>;

  constructor(
    private fb: FormBuilder,
    private donviService: DonviService) {
      this.loadDataEmit = new EventEmitter();
  }

  submitForm(){
    this.donvi.tenDonVi = this.validateForm.get("tendonvi")?.value;
    this.donvi.maDonVi = this.validateForm.get("madonvi")?.value;
    this.donvi.diachi = this.validateForm.get("diachi")?.value;
    return this.donviService.createDonvi(this.donvi).subscribe((item)=>{
      this.loadDataEmit.emit();
      this.validateForm = this.fb.group({
        tendonvi: [null, [Validators.required]],
        madonvi: [null, [Validators.required]],
        diachi: [null],
      });
    });
  }

  loadDonvi(){
    this.loadDataEmit.emit();
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      tendonvi: [null, [Validators.required]],
      madonvi: [null, [Validators.required]],
      diachi: [null],
    });
  }
}
