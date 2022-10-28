import { DottonvinhService } from './../../../shared/services/dottonvinh.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dot-ton-vinh-item',
  templateUrl: './dot-ton-vinh-item.component.html',
  styleUrls: ['./dot-ton-vinh-item.component.scss']
})
export class DotTonVinhItemComponent implements OnInit {


  @Input() dottonvinh :any;
  @Output() dottonvinhEvent: EventEmitter<any>;

  constructor(private dottonvinhService: DottonvinhService) {
    this.dottonvinhEvent = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
