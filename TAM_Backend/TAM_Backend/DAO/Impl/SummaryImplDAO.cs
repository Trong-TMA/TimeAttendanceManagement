using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Common;
using TAM_Backend.DataContext;
using TAM_Backend.Model;

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
            decimal countDay = _db.CheckInOuts.Where(u => u.Cio_Cd.Equals(tam_Cd) 
                && Convert.ToInt32(u.Cio_Ymd.Substring(4, 2)) == month
                && u.Cio_State == Constants.STT_001).Count();

            var absenceDay = _db.CheckInOuts.Where(u => u.Cio_Cd.Equals(tam_Cd)
                && Convert.ToInt32(u.Cio_Ymd.Substring(4, 2)) == month
                && u.Cio_State != Constants.STT_001);

            var annualLeaveDay = _db.AnnualLeaveConfirm.Where(u => u.Alc_Cd.Equals(tam_Cd)
                && Convert.ToInt32(u.Alc_Ymd.Substring(4, 2)) == month
                && u.Alc_State != Constants.STT_003);

            decimal countMins = 0;

            foreach (var day in absenceDay)
            {
                countMins += day.Cio_Duration;
            }

            foreach (var day in annualLeaveDay)
            {
                countMins += day.Alc_Duration;
            }

            //Calculate days
            decimal totalDay = countDay + countMins / 480;
            countMins = countMins + countDay * 480;
            decimal totalHours = countMins / 60;
            

            Summary summary = new Summary()
            {
                Sal_Cd = Guid.NewGuid(),
                Smr_Map_Cd = tam_Cd,
                Smr_Year = year,
                Smr_Month = month,
                Smr_Days = totalDay,
                Smr_Times = totalHours,
                Smr_Mins = countMins,
                Insert_Ymd = DateTime.Now
            };

            _db.Summary.Add(summary);
            _db.SaveChanges();
            return Constants.SUCCESS;
        }
    }
}
