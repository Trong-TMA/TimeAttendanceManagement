using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonCfmAbsence : JsonStaff
    {
        public string Month { get; set; }
        public decimal? StaffCode { get; set; }
    }
}
