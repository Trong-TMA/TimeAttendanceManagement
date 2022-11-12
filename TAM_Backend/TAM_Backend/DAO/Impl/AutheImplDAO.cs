using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.DataContext;
using TAM_Backend.Model;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.DAO.Impl
{
    public class AutheImplDAO : IAutheDAO
    {
        private AppDbContext _db { get; set; }

        public AutheImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public int QueryAccount(string userId, string password)
        {
            int isExistingUser = _db.Accounts
                .Where(u => u.UserId.Equals(userId) && u.Password.Equals(password) && u.Delete_Ymd == null)
                .Count();

            return isExistingUser;
        }

        public JsonStaff QueryUser(string userId)
        {
            decimal? stf_Cd = _db.Accounts.Where(u => u.UserId.Equals(userId)).Select(u => u.Stf_Cd).FirstOrDefault();

            Staff staff = _db.Staffs.Find(stf_Cd);

            JsonStaff jsStaff = new JsonStaff()
            {
                Stf_Cd = staff.Stf_Cd,
                Stf_Dpm_Cd = staff.Stf_Dpm_Cd,
                Stf_Name = staff.Stf_Name,
                Message = string.Empty
            };

            return jsStaff;
        }

        public bool QueryRoleApi(string dpm_Cd, string api_Cd)
        {
            int count = _db.DpmRoles.Where(u => u.Dpm_Cd.Equals(dpm_Cd) && u.Api_Cd.Equals(api_Cd)).Count();
            return count == 1 ? true : false;
        }
    }
}
