using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonSalaryTable
    {
        public decimal Stf_Cd { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
        public long Allowance { get; set; }
        public long Bonus { get; set; }
    }
}
