using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.DAO
{
    public interface IStaffDAO
    {
        public abstract IEnumerable<Staff> GetStaffs(decimal dpm_Cd);

        public abstract IEnumerable<Department> GetDepartments();
    }
}
