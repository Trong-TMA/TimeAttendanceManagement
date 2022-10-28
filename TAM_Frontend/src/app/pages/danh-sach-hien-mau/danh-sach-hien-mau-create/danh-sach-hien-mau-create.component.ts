import { Router } from '@angular/router';
import { NguoiHienMau } from './../../../shared/models/nguoihienmau.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DonviService } from 'src/app/shared/services/donvi.service';
import { DottonvinhService } from 'src/app/shared/services/dottonvinh.service';
import { QuanLyNguoiHienMauService } from 'src/app/shared/services/quan-ly-nguoi-hien-mau.service';

@Component({
  selector: 'app-danh-sach-hien-mau-create',
  templateUrl: './danh-sach-hien-mau-create.component.html',
  styleUrls: ['./danh-sach-hien-mau-create.component.scss'],
  providers: [FormBuilder]
})
export class DanhSachHienMauCreateComponent implements OnInit {

  isSpinning: boolean;
  validateForm!: FormGroup;
  dottonvinid:any;
  donviid:any;
  dottonvinhs:any;
  donvis:any;
  @Input() nguoihienmau: NguoiHienMau = new NguoiHienMau();
  @Output() loadDataEmit: EventEmitter<any>;


  constructor(
    private fb: FormBuilder,
    private nguoihienmauService: QuanLyNguoiHienMauService,
    private dottonvinhService : DottonvinhService,
    private donviService : DonviService,
    private router: Router,

    ) {
      this.loadDataEmit = new EventEmitter();
      this.isSpinning = false;
  }
  submitForm(){
    this.dottonvinid = this.validateForm.get('dottonvinhid')?.value
    this.donviid = this.validateForm.get('donviid')?.value
    this.nguoihienmau.HoTen = this.validateForm.get('hoten')?.value
    this.nguoihienmau.GioiTinh = this.validateForm.get('gioitinh')?.value
    this.nguoihienmau.NamSinh = this.validateForm.get('namsinh')?.value
    this.nguoihienmau.NgheNghiep = this.validateForm.get('nghenghiep')?.value
    this.nguoihienmau.DiaChi = this.validateForm.get('diachi')?.value
    this.nguoihienmau.NhomMau = this.validateForm.get('nhommau')?.value
    this.nguoihienmau.TV = this.validateForm.get('tv')?.value
    this.isSpinning = true;
    this.nguoihienmauService.createNguoiHienMau(this.dottonvinid,this.donviid,this.nguoihienmau).subscribe((item)=>{
      this.loadDataEmit.emit();
      this.validateForm = this.fb.group({
        dottonvinhid:[null,[Validators.required]],
        donviid:[null,[Validators.required]],
        hoten: [null,[Validators.required]],
        gioitinh: [true],
        namsinh: [null,[Validators.required]],
        nghenghiep: [null],
        diachi: [null],
        nhommau: [null,[Validators.required]],
        tv: [null],
      });
      this.router.navigate(["/Danh-sach-hien-mau"], {
        // skipLocationChange: true,
        // queryParams:{
        //   id: ''
        // }
      })
    })



  }
  loadData(){
    this.loadDataEmit.emit();
  }

  loadDottonvinh(){
    this.isSpinning = true;
    this.getDottonvinh().subscribe((item)=>{
      setTimeout(()=>{
        this.dottonvinhs = item;
        this.isSpinning = false;
      }, 1000)
    });
  }
  getDottonvinh(){
    return this.dottonvinhService.getAllDottonvinh();
  }

  loadDonvi(){
    this.isSpinning = true;
    this.getDonvi().subscribe((item)=>{
    setTimeout(()=>{
        this.donvis = item;
        this.isSpinning = false;
      }, 1000)
    });
  }
  getDonvi(){
    return this.donviService.getAllDonvi();
  }


  ngOnInit(){
    this.validateForm = this.fb.group({
      dottonvinhid:[null,[Validators.required]],
      donviid:[null,[Validators.required]],
      hoten: [null,[Validators.required]],
      gioitinh: [true],
      namsinh: [null,[Validators.required]],
      nghenghiep: [null],
      diachi: [null],
      nhommau: [null,[Validators.required]],
      tv: [null],
    });
    this.loadDottonvinh();
    this.loadDonvi();
  }

}
