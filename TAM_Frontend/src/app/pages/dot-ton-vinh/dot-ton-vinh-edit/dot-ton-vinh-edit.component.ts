import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DottonvinhService } from 'src/app/shared/services/dottonvinh.service';

@Component({
  selector: 'app-dot-ton-vinh-edit',
  templateUrl: './dot-ton-vinh-edit.component.html',
  styleUrls: ['./dot-ton-vinh-edit.component.scss'],
  providers: [FormBuilder]
})
export class DotTonVinhEditComponent implements OnInit {

  isSpinning: boolean;
  validateForm!: FormGroup;
  @Input() dottonvinh :any;
  @Output() loadDataEmit: EventEmitter<any>;

  constructor(
    private fb: FormBuilder,
    private dottonvinhService: DottonvinhService) {
      this.loadDataEmit = new EventEmitter();
      this.isSpinning = false;
  }

  submitForm(){
    this.dottonvinh.name = this.validateForm.get('tendottonvinh')?.value
    this.dottonvinh.code = this.validateForm.get('madottonvinh')?.value
    this.isSpinning = true;
    this.dottonvinhService.editDottonvinh(this.dottonvinh).subscribe((item)=>{
      this.loadDataEmit.emit();
    })
  }

  loadDonvi(){
    this.loadDataEmit.emit();
  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      tendottonvinh: [null, [Validators.required]],
      madottonvinh: [null, [Validators.required]],
    });
  }

}
