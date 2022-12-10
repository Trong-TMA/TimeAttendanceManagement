using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.DataContext;
using TAM_Backend.Model;

namespace TAM_Backend.DAO.Impl
{
    public class AbsenceImplDAO : IAbsenceDAO
    {
        private readonly AppDbContext _db;

        public AbsenceImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public IEnumerable<LeavingRegistration> GetLeavingRegistration(Guid tam_Cd, int month)
        {
            var dateNow = DateTime.Now;
            var dateNowInt = dateNow.Year * 10000;
            dateNowInt += dateNow.Month * 100;
            dateNowInt += dateNow.Day;

            var leavingRegistrationList = _db.LeavingRegistration
                .Where(u => u.Cio_Map_Cd.Equals(tam_Cd)
                            /*&& ((u.Insert_Ymd.HasValue ? u.Insert_Ymd.Value.Month : DateTime.Now.Month) == month)*/
                            && Convert.ToInt32(u.Cio_Ymd.Substring(4, 2)) == month
                            && u.Cio_State == 0
                            && dateNowInt >= Convert.ToInt32(u.Cio_Ymd))
                .OrderByDescending(u => u.Cio_Ymd);

            return leavingRegistrationList;
        }
    }
}
