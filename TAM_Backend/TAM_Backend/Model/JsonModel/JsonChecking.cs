using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonChecking : JsonStaff
    {
        public String Cio_Ymd { get; set; }
        public String Cio_Day { get; set; }
        public String Hh_Mm { get; set; }
        public String Ip_Chk_Log { get; set; }
    }
}
