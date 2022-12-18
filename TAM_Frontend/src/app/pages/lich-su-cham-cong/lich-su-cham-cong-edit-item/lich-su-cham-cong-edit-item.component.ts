import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lich-su-cham-cong-edit-item',
  templateUrl: './lich-su-cham-cong-edit-item.component.html',
  styleUrls: ['./lich-su-cham-cong-edit-item.component.scss'],
  providers: [FormBuilder]
})
export class LichSuChamCongEditItemComponent implements OnInit {

  isSpinning: boolean;
  validateForm!: FormGroup;
  radioValue : any
  date: any
  @Output() loadDataEmit: EventEmitter<any>;


  constructor(private fb: FormBuilder) {
    this.isSpinning = false;
    this.loadDataEmit = new EventEmitter();
  }

  loadData(){
    this.loadDataEmit.emit();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      staff: [localStorage.getItem('stf_Name'),[Validators.required]],
      dept:[localStorage.getItem('stf_Dpm_Cd'),[Validators.required]],
    });
  }

  submitForm(){}

}
