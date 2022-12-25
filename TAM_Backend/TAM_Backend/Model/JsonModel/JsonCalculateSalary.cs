using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonCalculateSalary : JsonStaff
    {
        public List<JsonSalaryTable> SalaryList { get; set; }
    }
}
