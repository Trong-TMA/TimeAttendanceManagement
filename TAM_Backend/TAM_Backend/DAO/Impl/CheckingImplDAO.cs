using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Common;
using TAM_Backend.DataContext;
using TAM_Backend.Model;

namespace TAM_Backend.DAO.Impl
{
    public class CheckingImplDAO : ICheckingDAO
    {
        private AppDbContext _db { get; set; }

        public CheckingImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public string CheckIn(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm)
        {
            decimal psn_Cd = _db.Accounts.FirstOrDefault(u => u.Stf_Cd.Equals(stf_Cd)).Psn_Cd;

            CheckInOut cio = new CheckInOut()
            {
                Cio_Cd = Guid.NewGuid(),
                Cio_Map_Cd = tam_Cd,
                Cio_Ymd = cio_Ymd,
                Cio_Day = cio_Day,
                In_Hh_Mm = in_Hh_Mm,
                Out_Hh_Mm = in_Hh_Mm,
                Cio_Duration = 1,
                Cio_State = 3,
                Insert_Psn_Cd = psn_Cd
            };

            _db.CheckInOuts.Add(cio);
            _db.SaveChanges();

            return Constants.SUCCESS;
        }

        public string CheckOut(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string out_Hh_Mm)
        {
            CheckInOut cioInDb = _db.CheckInOuts.FirstOrDefault(u => u.Cio_Map_Cd.Equals(tam_Cd) && u.Cio_Ymd.Equals(cio_Ymd) && u.Cio_Day.Equals(cio_Day));

            if (cioInDb == null)
            {
                return Constants.ERROR;
            }

            int moring_Duration = TamUtils.ConvertToMinute(Constants.HM_12_00) - TamUtils.ConvertToMinute(cioInDb.In_Hh_Mm);
            int afternoon_Duration = TamUtils.ConvertToMinute(out_Hh_Mm) - TamUtils.ConvertToMinute(Constants.HM_13_15);
            int duration = moring_Duration + afternoon_Duration;

            //Set value
            cioInDb.Out_Hh_Mm = out_Hh_Mm;
            cioInDb.Cio_Duration = duration;
            //if duration more than or equal 8 hours return "1" else "0"
            cioInDb.Cio_State = duration >= 480 ? 1 : 0;

            _db.CheckInOuts.Update(cioInDb);

            return Constants.SUCCESS;
        }

        public string UpdateChecking(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string out_Hh_Mm)
        {
            throw new NotImplementedException();
        }

    }
}
