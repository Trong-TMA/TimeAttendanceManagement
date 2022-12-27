export class Absence{

  constructor(
    public cio_Cd?: string,
    public cio_Map_Cd?: string,
    public cio_Ymd?: string,
    public cio_Day?: string,
    public in_Hh_Mm?: string,
    public out_Hh_Mm?: string,
    public cio_Duration?: string,
    public cio_State?: string,
    public ip_In_Log?: string,
    public ip_Out_Log?: string,
    public update_Psn_Cd?: string,
    public taManager?: string,
    public delete_Ymd?: string,
    public insert_Ymd?: string,
    public update_Ymd?: string,
    public insert_Psn_Cd?: string
    ){
  }

}
