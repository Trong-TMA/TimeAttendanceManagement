import { NguoiHienMau } from './../../../shared/models/nguoihienmau.model';
import { QuanLyNguoiHienMauService } from 'src/app/shared/services/quan-ly-nguoi-hien-mau.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-danh-sach-hien-mau-edit',
  templateUrl: './danh-sach-hien-mau-edit.component.html',
  styleUrls: ['./danh-sach-hien-mau-edit.component.scss'],
  providers: [FormBuilder]
})
export class DanhSachHienMauEditComponent implements OnInit {

  isSpinning: boolean;
  validateForm!: FormGroup;
  @Input() nguoihienmau :any;
  @Output() loadDataEmit: EventEmitter<any>;

  constructor(
    private fb: FormBuilder,
    private nguoihienmauService: QuanLyNguoiHienMauService) {
      this.loadDataEmit = new EventEmitter();
      this.isSpinning = false;
  }

  submitForm(){
    this.nguoihienmau.HoTen = this.validateForm.get('hoten')?.value
    this.nguoihienmau.GioiTinh = this.validateForm.get('gioitinh')?.value
    this.nguoihienmau.NamSinh = this.validateForm.get('namsinh')?.value
    this.nguoihienmau.NgheNghiep = this.validateForm.get('nghenghiep')?.value
    this.nguoihienmau.DiaChi = this.validateForm.get('diachi')?.value
    this.nguoihienmau.NhomMau = this.validateForm.get('nhommau')?.value
    this.nguoihienmau.TV = this.validateForm.get('tv')?.value
    this.isSpinning = true;
    this.nguoihienmauService.editNguoiHienMau(this.nguoihienmau).subscribe((item)=>{
      this.loadDataEmit.emit();
    })

  }

  loadDonvi(){
    this.loadDataEmit.emit();
  }
  ngOnInit(){
    this.validateForm = this.fb.group({
      hoten: [null],
      gioitinh: [this.nguoihienmau.GioiTinh],
      namsinh: [null],
      nghenghiep: [null],
      diachi: [null],
      nhommau: [null],
      tv: [null],
    });
  }

}
