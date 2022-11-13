import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-cham-cong-list',
  templateUrl: './cham-cong-list.component.html',
  styleUrls: ['./cham-cong-list.component.scss']
})
export class ChamCongListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
