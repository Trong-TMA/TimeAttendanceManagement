using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonSearchChecking : JsonStaff
    {
        public string StartDay { get; set; }
        public string EndDay { get; set; }
        public string Month { get; set; }
        public string GetMode { get; set; }
    }
}
