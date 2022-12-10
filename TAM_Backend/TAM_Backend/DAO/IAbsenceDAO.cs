using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model;

namespace TAM_Backend.DAO
{
    public interface IAbsenceDAO
    {
        public abstract IEnumerable<LeavingRegistration> GetLeavingRegistration(Guid tam_Cd, int month);
    }
}
