import { DeXuatNguoiHienMauService } from './../../shared/services/de-xuat-nguoi-hien-mau.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { DottonvinhService } from 'src/app/shared/services/dottonvinh.service';
import { DonviService } from 'src/app/shared/services/donvi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-de-xuat-ca-nhan',
  templateUrl: './de-xuat-ca-nhan.component.html',
  styleUrls: ['./de-xuat-ca-nhan.component.scss']
})

export class DeXuatCaNhanComponent implements OnInit {

  isSpinning: boolean;
  validateForm!: FormGroup;
  dottonvinid:any;
  donviid:any;
  dottonvinhs:any;
  donvis:any;
  listNguoihienmauimport:any;
  datafile: File[] = [];
  current = 0;
  count = 0;
  @Output() loadDataEmit: EventEmitter<any>;


  constructor(
    private fb: FormBuilder,
    private nguoihienmauService: DeXuatNguoiHienMauService,
    private dottonvinhService : DottonvinhService,
    private donviService : DonviService,
    private router: Router,
    ) {
      this.loadDataEmit = new EventEmitter();
      this.isSpinning = false;

  }



  pre(): void {
    this.current -= 1;
  }
  next(): void {
    this.current += 1;
  }

  done(){
    this.nguoihienmauService.save(this.dottonvinid,this.donviid,this.listNguoihienmauimport).subscribe((item)=>{
      this.current = 0;
      this.datafile = [];
      this.donviid ="";
      this.dottonvinid ="";
      this.listNguoihienmauimport = [];
      this.router.navigate(["/Lich-su-ton-vinh"], {
        // skipLocationChange: true,
        // queryParams:{
        //   id: ''
        // }
      })
    })
    
  }

  onSelect(event: any) {
    for(let file of event.files) {
        this.datafile.push(file);
    }
  }

  deleteFile(event: any) {
    this.datafile.splice(this.datafile.findIndex(item => item.name === event.name), 1);
  }

  submitForm(){
    this.dottonvinid = this.validateForm.get('dottonvinhid')?.value
    this.donviid = this.validateForm.get('donviid')?.value

    let formData = new FormData();
    formData.append('file', this.datafile[0], this.datafile[0].name);

    this.nguoihienmauService.import(this.dottonvinid,this.donviid,formData).subscribe((item)=>{
      this.listNguoihienmauimport = item
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

  showGender(gend:any){
    if(gend == true){
      return "Nam"
    }
    else{
      return "Nữ"
    }
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      dottonvinhid:[null,[Validators.required]],
      donviid:[null,[Validators.required]],
    });
    this.loadDottonvinh();
    this.loadDonvi();
  }

}
