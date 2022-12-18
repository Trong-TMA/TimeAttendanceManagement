import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lich-su-cham-cong-edit-items',
  templateUrl: './lich-su-cham-cong-edit-items.component.html',
  styleUrls: ['./lich-su-cham-cong-edit-items.component.scss'],
  providers: [FormBuilder]
})
export class LichSuChamCongEditItemsComponent implements OnInit {

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
    });
  }

  submitForm(){}

}
