import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonviService } from 'src/app/shared/services/donvi.service';
import { DottonvinhService } from 'src/app/shared/services/dottonvinh.service';
import { QuanLyNguoiHienMauService } from 'src/app/shared/services/quan-ly-nguoi-hien-mau.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss'],
  providers: [FormBuilder]
})
export class ExportComponent implements OnInit {


  isSpinning: boolean;
  validateForm!: FormGroup;
  dottonvinid:any;
  donviid:any;
  dottonvinhs:any;
  donvis:any;
  fileType = '';
  fileExtension = '';
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

  export(){
    this.dottonvinid = this.validateForm.get('dottonvinhid')?.value
    this.donviid = this.validateForm.get('donviid')?.value
    this.nguoihienmauService.export(this.dottonvinid,this.donviid).subscribe((result: Blob)=>{
      const blob = new Blob([result], { type: result.type}); // you can change the type
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    })
  }


  ngOnInit(){
    this.validateForm = this.fb.group({
      dottonvinhid:[null],
      donviid:[null],
    });
    this.loadDottonvinh();
    this.loadDonvi();
  }

}
