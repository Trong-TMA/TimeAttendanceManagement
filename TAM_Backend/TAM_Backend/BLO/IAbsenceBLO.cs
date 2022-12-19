using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Common;
using TAM_Backend.Model;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.BLO
{
    public interface IAbsenceBLO
    {
        public abstract Object GetAbsences(JsonAbsence jsAbsence);
        public abstract string RegistAbsence(JsonAnnualLeaveRegist jsAnnualLeave);
        public abstract Object GetConfirmAbsences(JsonCfmAbsence jsCfmAbsence);
        public abstract string DoConfirmAbsences(List<Guid> confirmList);
    }
}
