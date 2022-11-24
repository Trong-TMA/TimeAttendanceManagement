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
        private readonly AppDbContext _db;

        public CheckingImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public string CheckIn(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string ip_In_Log)
        {
            decimal psn_Cd = _db.Accounts.FirstOrDefault(u => u.Stf_Cd.Equals(stf_Cd)).Psn_Cd;

            //Check if ip is valid
            var ipInDb = _db.IPNetworks.Find(ip_In_Log);

            if (ipInDb == null)
            {
                return Constants.ERROR;
            }

            //Check if existing record in db
            CheckInOut cioInDb = _db.CheckInOuts.FirstOrDefault(
                u => u.Cio_Map_Cd.Equals(tam_Cd) 
                && u.Cio_Ymd.Equals(cio_Ymd) 
                && u.Cio_Day.Equals(cio_Day));

            if (cioInDb != null)
            {
                return Constants.ERROR;
            }

            CheckInOut cio = new CheckInOut()
            {
                Cio_Cd = Guid.NewGuid(),
                Cio_Map_Cd = tam_Cd,
                Cio_Ymd = cio_Ymd,
                Cio_Day = cio_Day,
                In_Hh_Mm = in_Hh_Mm,
                Out_Hh_Mm = in_Hh_Mm,
                Cio_Duration = 1,
                Cio_State = Constants.STT_000,
                Insert_Ymd = DateTime.Now,
                Insert_Psn_Cd = psn_Cd,
                Ip_In_Log = ip_In_Log
            };

            _db.CheckInOuts.Add(cio);
            _db.SaveChanges();

            return Constants.SUCCESS;
        }

        public string CheckOut(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string out_Hh_Mm, string ip_Out_Log)
        {
            decimal psn_Cd = _db.Accounts.FirstOrDefault(u => u.Stf_Cd.Equals(stf_Cd)).Psn_Cd;

            //Check if ip is valid
            var ipInDb = _db.IPNetworks.Find(ip_Out_Log);

            if (ipInDb == null)
            {
                return Constants.ERROR;
            }

            //Check if existing record in db
            CheckInOut cioInDb = _db.CheckInOuts.FirstOrDefault(
                u => u.Cio_Map_Cd.Equals(tam_Cd) 
                && u.Cio_Ymd.Equals(cio_Ymd) 
                && u.Cio_Day.Equals(cio_Day));
            
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
            cioInDb.Update_Ymd = DateTime.Now;
            cioInDb.Update_Psn_Cd = psn_Cd;
            cioInDb.Ip_Out_Log = ip_Out_Log;
            //if duration more than or equal 8 hours return "1" else "0"
            cioInDb.Cio_State = duration >= 480 ? Constants.STT_001 : Constants.STT_000;

            _db.CheckInOuts.Update(cioInDb);
            _db.SaveChanges();

            return Constants.SUCCESS;
        }

        public string UpdateChecking(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string out_Hh_Mm)
        {
            throw new NotImplementedException();
        }

        public string CheckState(Guid tam_Cd, string cio_Ymd, string cio_Day, String ip_Chk_Log)
        {
            //Check if ip is valid
            var ipInDb = _db.IPNetworks.Find(ip_Chk_Log);

            if (ipInDb == null)
            {
                return Constants.STT_IP;
            }

            //Check if checkin is exist
            var chkInInDb = _db.CheckInOuts.FirstOrDefault(
                u => u.Cio_Map_Cd.Equals(tam_Cd) 
                && u.Cio_Ymd.Equals(cio_Ymd) 
                && u.Cio_Day.Equals(cio_Day));

            if (chkInInDb == null)
            {
                return Constants.STT_IN;
            } else
            {
                if (string.IsNullOrEmpty(chkInInDb.Out_Hh_Mm))
                {
                    return Constants.STT_OUT;
                } else
                {
                    return Constants.STT_DONE;
                }
            }
        }

        public IEnumerable<CheckInOut> GetCheckInOut(Guid tam_Cd, DateTime startDay, DateTime endDay)
        {
            var dateNow = DateTime.Now;
            var dateNowInt = dateNow.Year * 10000;
            dateNowInt += dateNow.Month * 100;
            dateNowInt += dateNow.Day;

            var checkInOutList = _db.CheckInOuts
                .Where(u => u.Cio_Map_Cd.Equals(tam_Cd)
                            && DateTime.Compare(startDay, (u.Insert_Ymd.HasValue ? u.Insert_Ymd.Value : DateTime.Now)) <= 0
                            && DateTime.Compare(endDay, (u.Insert_Ymd.HasValue ? u.Insert_Ymd.Value : DateTime.Now)) >= 0
                            && dateNowInt >= Convert.ToInt32(u.Cio_Ymd))
                .OrderByDescending(u => u.Insert_Ymd);

            return checkInOutList;
        }

        public IEnumerable<CheckInOut> GetCheckInOut(Guid tam_Cd, int month)
        {
            var dateNow = DateTime.Now;
            var dateNowInt = dateNow.Year * 10000;
            dateNowInt += dateNow.Month * 100;
            dateNowInt += dateNow.Day;

            var checkInOutList = _db.CheckInOuts
                .Where(u => u.Cio_Map_Cd.Equals(tam_Cd)
                            && ((u.Insert_Ymd.HasValue ? u.Insert_Ymd.Value.Month : DateTime.Now.Month) == month)
                            && dateNowInt >= Convert.ToInt32(u.Cio_Ymd));

            return checkInOutList;
        }
    }
}
