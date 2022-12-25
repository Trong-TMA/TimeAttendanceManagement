using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Common;
using TAM_Backend.DataContext;

namespace TAM_Backend.DAO.Impl
{
    public class SummaryImplDAO : ISummaryDAO
    {
        private readonly AppDbContext _db;

        public SummaryImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public string RegistSummary(Guid tam_Cd, int year, int month)
        {
            int countDay = _db.CheckInOuts.Where(u => u.Cio_Cd.Equals(tam_Cd) 
                && Convert.ToInt32(u.Cio_Ymd.Substring(4, 2)) == month
                && u.Cio_State == Constants.STT_001).Count();

            var absenceDay = _db.CheckInOuts.Where(u => u.Cio_Cd.Equals(tam_Cd)
                && Convert.ToInt32(u.Cio_Ymd.Substring(4, 2)) == month
                && u.Cio_State != Constants.STT_001);

            foreach (var day in absenceDay)
            {

            }
            return Constants.SUCCESS;
        }
    }
}
