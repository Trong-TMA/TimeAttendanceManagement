import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuanLyNguoiHienMauService } from 'src/app/shared/services/quan-ly-nguoi-hien-mau.service';

@Component({
  selector: 'app-lich-su-ton-vinh-list-edit',
  templateUrl: './lich-su-ton-vinh-list-edit.component.html',
  styleUrls: ['./lich-su-ton-vinh-list-edit.component.scss'],
  providers: [FormBuilder]
})
export class LichSuTonVinhListEditComponent implements OnInit {

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
