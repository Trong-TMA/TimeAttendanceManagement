import { DottonvinhService } from './../../../shared/services/dottonvinh.service';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideRoutes } from '@angular/router';
@Component({
  selector: 'app-dot-ton-vinh-create',
  templateUrl: './dot-ton-vinh-create.component.html',
  styleUrls: ['./dot-ton-vinh-create.component.scss'],
  providers: [FormBuilder]
})
export class DotTonVinhCreateComponent implements OnInit {

  validateForm!: FormGroup;
  @Output() LoadDataEvent: EventEmitter<any>;

  constructor(
    private fb: FormBuilder,
    private dottonvinhService: DottonvinhService) {
      this.LoadDataEvent = new EventEmitter();
  }

  submitForm(){
    return this.dottonvinhService.createDottonvinh(this.validateForm.get('madottonvinh')?.value).subscribe((item)=>{
      this.LoadDataEvent.emit();
      this.validateForm = this.fb.group({
        madottonvinh: [null, [Validators.required]]
      });
    });

  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      madottonvinh: [null, [Validators.required]]
    });
  }

}
