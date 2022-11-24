using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Common;
using TAM_Backend.DataContext;
using TAM_Backend.Model;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.DAO.Impl
{
    public class StaffImplDAO : IStaffDAO
    {
        private readonly AppDbContext _db;

        public StaffImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public IEnumerable<Staff> GetStaffs(decimal dpm_Cd)
        {
            IEnumerable<Staff> staffList = _db.Staffs.Where(u => u.Stf_Dpm_Cd == dpm_Cd);

            return staffList;
        }

        public IEnumerable<Department> GetDepartments()
        {
            IEnumerable<Department> departmentList = _db.Departments.Take(Constants.LIMIT_500);

            return departmentList;
        }
    }
}
