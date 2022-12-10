import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nghi-phep',
  templateUrl: './nghi-phep.component.html',
  styleUrls: ['./nghi-phep.component.scss']
})
export class NghiPhepComponent implements OnInit {


  displayCreate: boolean = false;
  displayEdit: boolean = false;
  isSpinning: boolean;
  constructor() {
    this.isSpinning = false;
  }

  ngOnInit(): void {
  }

  showDialogCreate() {
    this.displayCreate = true;
  }

  showDialogEdit(){
    this.displayEdit = true
  }
}
