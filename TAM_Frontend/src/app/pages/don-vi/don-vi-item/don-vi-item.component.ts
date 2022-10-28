import { DonviService } from './../../../shared/services/donvi.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-don-vi-item',
  templateUrl: './don-vi-item.component.html',
  styleUrls: ['./don-vi-item.component.scss']
})
export class DonViItemComponent implements OnInit {

  @Input() dottonvinh :any;
  @Output() loadDataEmit: EventEmitter<any>;

  constructor(private donviService: DonviService) {
    this.loadDataEmit = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
