import { Component, OnInit } from '@angular/core';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-cham-cong',
  templateUrl: './cham-cong.component.html',
  styleUrls: ['./cham-cong.component.scss']
})
export class ChamCongComponent implements OnInit {

  public chckweek = false;
  public chckmonth = false;
  public value = null;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
