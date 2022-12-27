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
    public class SummaryImplDAO : ISummaryDAO
    {
        private readonly AppDbContext _db;

        public SummaryImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public string RegistSummary(Guid tam_Cd, int year, int month)
        {
            decimal countDay = _db.CheckInOuts.Where(u => u.Cio_Map_Cd.Equals(tam_Cd) 
                && Convert.ToInt32(u.Cio_Ymd.Substring(4, 2)) == month
                && u.Cio_State == Constants.STT_001).Count();

            var absenceDay = _db.CheckInOuts.Where(u => u.Cio_Map_Cd.Equals(tam_Cd)
                && Convert.ToInt32(u.Cio_Ymd.Substring(4, 2)) == month
                && u.Cio_State != Constants.STT_001);

            var annualLeaveDay = _db.AnnualLeaveConfirm.Where(u => u.Alc_Map_Cd.Equals(tam_Cd)
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
            decimal totalDay = Math.Round((countDay + countMins / 480), 2);
            countMins = Math.Round(countMins + countDay * 480, 2);
            decimal totalHours = Math.Round(countMins / 60, 2);


            Summary summary = new Summary()
            {
                Smr_Cd = Guid.NewGuid(),
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

        public string SummarySalary(List<JsonSalaryTable> jsSalaryTbList)
        {
            foreach(var item in jsSalaryTbList)
            {
                SummarySalary(item);
            }

            return Constants.SUCCESS;
        }

        public SalaryTable GetSalary(Guid tam_Cd)
        {
            return _db.SalaryTable.FirstOrDefault(u => u.St_Map_Cd.Equals(tam_Cd));
        }

        private void SummarySalary(JsonSalaryTable jsSalaryTb)
        {
            var summary = _db.Summary.FirstOrDefault(
                u => u.Smr_Map_Cd.Equals(jsSalaryTb.Tam_Cd) 
                && u.Smr_Month == jsSalaryTb.Month 
                && u.Smr_Year == jsSalaryTb.Year);

            var salary = _db.Salary.FirstOrDefault(u => u.Sal_Map_Cd.Equals(jsSalaryTb.Tam_Cd));

            //Tinh luong
            long totalSalary = (long)((salary.Sal_Base * salary.Sal_Coef + jsSalaryTb.Allowance) / 24 * summary.Smr_Days) + jsSalaryTb.Bonus;

            SalaryTable slrTable = new SalaryTable()
            {
                St_Cd = Guid.NewGuid(),
                St_Map_Cd = jsSalaryTb.Tam_Cd,
                St_Year = jsSalaryTb.Year,
                St_Month = jsSalaryTb.Month,
                St_Days = summary.Smr_Days,
                St_Times = summary.Smr_Times,
                St_Allowance = jsSalaryTb.Allowance,
                St_Bonus = jsSalaryTb.Bonus,
                St_Total = totalSalary,
                Insert_Ymd = DateTime.Now
            };

            _db.SalaryTable.Add(slrTable);
            _db.SaveChanges();
        }
    }
}
