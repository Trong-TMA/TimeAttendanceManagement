import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { QuanLyNguoiHienMauService } from 'src/app/shared/services/quan-ly-nguoi-hien-mau.service';

@Component({
  selector: 'app-lich-su-ton-vinh-search',
  templateUrl: './lich-su-ton-vinh-search.component.html',
  styleUrls: ['./lich-su-ton-vinh-search.component.scss']
})
export class LichSuTonVinhSearchComponent implements OnInit {



  isSpinning: boolean;
  validateForm!: FormGroup;
  @Input() Listnguoihienmau: any;
  @Output() loadDataEmit: EventEmitter<any>;



  constructor(
    private quanlyNguoiHienMauService: QuanLyNguoiHienMauService,
    private fb: FormBuilder) {
      this.isSpinning = false;
      this.loadDataEmit = new EventEmitter();
  }

  loadData(){
    this.loadDataEmit.emit();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      filter: [null],
      gioitinh: [true],
      namsinh: [null],
    });
  }

  search(event: any){
    this.quanlyNguoiHienMauService.search(this.validateForm.get('filter')?.value,this.validateForm.get('gioitinh')?.value,moment(this.validateForm.get('namsinh')?.value).format('yyyy')).subscribe((res)=>{
      console.log(res);
      this.loadDataEmit.emit(res)
    })
    console.log(this.validateForm.get('filter')?.value,this.validateForm.get('gioitinh')?.value,moment(this.validateForm.get('namsinh')?.value).format('yyyy'));

  }

  onOpenCalendar(container:any) {
    container.yearSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('year');
  }

}
