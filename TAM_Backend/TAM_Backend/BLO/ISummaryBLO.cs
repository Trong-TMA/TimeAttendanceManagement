using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.BLO
{
    public interface ISummaryBLO
    {
        public abstract string RegistSummary(JsonSummary jsSummary);
        public abstract string CalculateSalary(List<JsonSalaryTable> jsSalaryTbList);
        public abstract SalaryTable GetSalaryTable(decimal stf_Cd);
    }
}
