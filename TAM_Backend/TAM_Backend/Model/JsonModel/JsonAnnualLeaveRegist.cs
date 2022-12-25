using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonAnnualLeaveRegist : JsonStaff
    {
        public Guid? Alc_Cd { get; set; }
        public int State { get; set; }
        public string Alc_Ymd { get; set; }
        public string In_Hh_Mm { get; set; }
        public string Out_Hh_Mm { get; set; }
        public string Reason { get; set; }
    }
}
