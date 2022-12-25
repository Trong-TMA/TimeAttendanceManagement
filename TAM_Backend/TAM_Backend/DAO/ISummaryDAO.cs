using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model;

namespace TAM_Backend.DAO
{
    public interface ISummaryDAO
    {
        public abstract string RegistSummary(Guid tam_Cd, int year, int month);
    }
}
