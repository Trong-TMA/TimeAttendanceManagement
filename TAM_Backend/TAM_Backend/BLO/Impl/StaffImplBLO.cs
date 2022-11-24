using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Common;
using TAM_Backend.DAO;
using TAM_Backend.Model;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.BLO.Impl
{
    public class StaffImplBLO : IStaffBLO
    {
        private readonly ICommonDAO _commonDao;
        private readonly IStaffDAO _staffDao;

        public StaffImplBLO(ICommonDAO commonDao, IStaffDAO staffDao)
        {
            this._commonDao = commonDao;
            this._staffDao = staffDao;
        }
        public IEnumerable<Staff> GetStaffs(JsonSearchStaff jsSearchStaff)
        {
            return _staffDao.GetStaffs(jsSearchStaff.Dpm_Cd);
        }
        public IEnumerable<Department> GetDeparments()
        {
            return _staffDao.GetDepartments();
        }
    }
}
