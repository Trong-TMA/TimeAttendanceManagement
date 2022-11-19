export class Checkinout{

  constructor(
  public stf_Cd: string,
  public stf_Dpm_Cd: string,
  public stf_Name: string,
  public message: string,
  public cio_Ymd: string,
  public cio_Day: string,
  public in_Hh_Mm: string,
  public out_Hh_Mm: string,
  public ip_In_Log: string,
  public ip_Out_Log: string){
  }

}
