import { Absence } from './../../../shared/models/absence.model';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nghi-phep-list',
  templateUrl: './nghi-phep-list.component.html',
  styleUrls: ['./nghi-phep-list.component.scss']
})
export class NghiPhepListComponent implements OnInit {

  @Input() listAbsence: any;
  @Output() loadDataEmit: EventEmitter<any>;

  displayCreate = false;
  displayConfirm = false;
  isSpinning: boolean;
  absence: Absence = new Absence();


  constructor() {
    this.loadDataEmit =  new EventEmitter();
    this.isSpinning = false;
  }

  ngOnInit(): void {

  }

  loadData(){
    this.loadDataEmit.emit();
  }

  convertMinsToHrsMins (minutes : any) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
  }

  showDialogCreate(item: any ) {
    this.displayCreate = true;
    this.absence.cio_Cd = item.cio_Cd;
    this.absence.cio_Map_Cd = item.cio_Map_Cd;
    this.absence.cio_Ymd = item.cio_Ymd;
    this.absence.cio_Day = item.cio_Day;
    this.absence.in_Hh_Mm =  item.in_Hh_Mm;
    this.absence.out_Hh_Mm =  item.out_Hh_Mm;
    this.absence.cio_Duration =  item.cio_Duration;
    this.absence.cio_State =  item.cio_State;
    this.absence.ip_In_Log =  item.ip_In_Log;
    this.absence.ip_Out_Log =  item.ip_Out_Log;
    this.absence.update_Psn_Cd =  item.update_Psn_Cd;
    this.absence.taManager =  item.taManager;
    this.absence.delete_Ymd =  item.delete_Ymd;
    this.absence.insert_Ymd =  item.insert_Ymd;
    this.absence.update_Ymd =  item.update_Ymd;
    this.absence.insert_Psn_Cd =  item.insert_Psn_Cd;
    this.loadData();
  }

  showDialogConfirm(item: any){
    this.displayConfirm = true
    this.absence.cio_Cd = item.cio_Cd;
    this.absence.cio_Map_Cd = item.cio_Map_Cd;
    this.absence.cio_Ymd = item.cio_Ymd;
    this.absence.cio_Day = item.cio_Day;
    this.absence.in_Hh_Mm =  item.in_Hh_Mm;
    this.absence.out_Hh_Mm =  item.out_Hh_Mm;
    this.absence.cio_Duration =  item.cio_Duration;
    this.absence.cio_State =  item.cio_State;
    this.absence.ip_In_Log =  item.ip_In_Log;
    this.absence.ip_Out_Log =  item.ip_Out_Log;
    this.absence.update_Psn_Cd =  item.update_Psn_Cd;
    this.absence.taManager =  item.taManager;
    this.absence.delete_Ymd =  item.delete_Ymd;
    this.absence.insert_Ymd =  item.insert_Ymd;
    this.absence.update_Ymd =  item.update_Ymd;
    this.absence.insert_Psn_Cd =  item.insert_Psn_Cd;
    this.loadData();
  }


}
