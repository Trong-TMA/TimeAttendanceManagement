﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model;

namespace TAM_Backend.DAO
{
    public interface IAbsenceDAO
    {
        public abstract IEnumerable<LeavingRegistration> GetLeavingRegistration(Guid tam_Cd, int month);
        public abstract string RegistAbsence(Guid cio_Cd);
        public abstract string RegistAbsence(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string out_Hh_Mm);
    }
}
