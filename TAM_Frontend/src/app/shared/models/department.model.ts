import { InfStaff } from "./infstaff.model";
import { Staff } from "./staff.model";

export class Department{
  constructor(

  public id: string,
  public nameDpm: string,
  public staffs: Staff[],
  public note: string){
  }
}
