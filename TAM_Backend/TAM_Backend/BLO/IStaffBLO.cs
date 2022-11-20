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
    public interface IStaffBLO
    {
        public abstract IEnumerable<Staff> GetStaffs(JsonSearchChecking jsSearchChecking);
    }
}
