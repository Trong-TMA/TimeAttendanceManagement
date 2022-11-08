using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonStaff
    {
        public decimal? Stf_Cd { get; set; }
        public decimal? Stf_Dpm_Cd { get; set; }
        public string Stf_Name { get; set; }
        public string Message { get; set; }
    }
}
