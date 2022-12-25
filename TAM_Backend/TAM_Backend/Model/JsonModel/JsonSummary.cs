using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonSummary : JsonStaff
    {
        public int Year { get; set; }
        public int Month { get; set; }
    }
}
