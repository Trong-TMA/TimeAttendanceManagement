using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonLeaveRegistration : JsonStaff
    {
        public Guid? Cio_Cd { get; set; }
        public string Cio_Ymd { get; set; }
        public string In_Hh_Mm { get; set; }
        public string Out_Hh_Mm { get; set; }
    }
}
