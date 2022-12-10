import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    // this.dottonvinid = this.validateForm.get('dottonvinhid')?.value
    // this.donviid = this.validateForm.get('donviid')?.value
    // this.nguoihienmau.HoTen = this.validateForm.get('hoten')?.value
    // this.nguoihienmau.GioiTinh = this.validateForm.get('gioitinh')?.value
    // this.nguoihienmau.NamSinh = this.validateForm.get('namsinh')?.value
    // this.nguoihienmau.NgheNghiep = this.validateForm.get('nghenghiep')?.value
    // this.nguoihienmau.DiaChi = this.validateForm.get('diachi')?.value
    // this.nguoihienmau.NhomMau = this.validateForm.get('nhommau')?.value
    // this.nguoihienmau.TV = this.validateForm.get('tv')?.value
    // this.isSpinning = true;
    // this.nguoihienmauService.createNguoiHienMau(this.dottonvinid,this.donviid,this.nguoihienmau).subscribe((item)=>{
    //   this.loadDataEmit.emit();
    //   this.validateForm = this.fb.group({
    //     dottonvinhid:[null,[Validators.required]],
    //     donviid:[null,[Validators.required]],
    //     hoten: [null,[Validators.required]],
    //     gioitinh: [true],
    //     namsinh: [null,[Validators.required]],
    //     nghenghiep: [null],
    //     diachi: [null],
    //     nhommau: [null,[Validators.required]],
    //     tv: [null],
    //   });
    //   this.router.navigate(["/Danh-sach-hien-mau"], {
    //     // skipLocationChange: true,
    //     // queryParams:{
    //     //   id: ''
    //     // }
    //   })
    // })
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
