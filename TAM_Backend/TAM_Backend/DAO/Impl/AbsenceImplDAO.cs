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
    public class AbsenceImplDAO : IAbsenceDAO
    {
        private readonly AppDbContext _db;

        public AbsenceImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public IEnumerable<LeavingRegistration> GetConfirm(int month)
        {
            var confirmList = _db.LeavingRegistration
                .Where(u => Convert.ToInt32(u.Cio_Ymd.Substring(4, 2)) == month
                            && u.Cio_State == 1);

            return confirmList;
        }

        public IEnumerable<LeavingRegistration> GetConfirm(Guid tam_Cd, int month)
        {
            var confirmList = GetConfirm(month).Where(u => u.Cio_Map_Cd.Equals(tam_Cd));

            return confirmList;
        }

        public string GetConfirm(List<Guid> confirmList)
        {
            AnnualLeaveConfirm annualLeaveConfirm;
            foreach(var item in confirmList)
            {
                var recordInDb = _db.AnnualLeaveConfirm.Find(item);
                var annualLeave = _db.AnnualLeave.Find(item);


                switch (recordInDb.Alc_State)
                {
                    //Nghi phep
                    case Constants.STT_001:
                        break;
                    //Nghi khong phep
                    case Constants.STT_000:
                        break;
                }
            }

            return Constants.SUCCESS;
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

        public string RegistAbsence(Guid cio_Cd, int state) 
        {
            var absenceInDb = _db.LeavingRegistration.Find(cio_Cd);

            if (absenceInDb == null)
            {
                return Constants.ERROR;
            }

            //Update state of absence
            absenceInDb.Cio_State = Constants.STT_001;

            AnnualLeaveConfirm annualLeaveConfirm = new AnnualLeaveConfirm()
            {
                Alc_Cd = Guid.NewGuid(),
                Alc_Map_Cd = absenceInDb.Cio_Map_Cd,
                Alc_Day = absenceInDb.Cio_Day,
                Alc_Ymd = absenceInDb.Cio_Ymd,
                From_Hh_Mm = absenceInDb.In_Hh_Mm,
                To_Hh_Mm = absenceInDb.Out_Hh_Mm,
                Alc_Duration = absenceInDb.Cio_Duration,
                Alc_State = state,
                Delete_Ymd = null,
                Insert_Ymd = DateTime.Now,
                Insert_Psn_Cd = absenceInDb.Insert_Psn_Cd,
                Update_Psn_Cd = null
            };

            _db.LeavingRegistration.Update(absenceInDb);
            _db.AnnualLeaveConfirm.Add(annualLeaveConfirm);
            _db.SaveChanges();

            return Constants.SUCCESS;
        }

        public string RegistAbsence(decimal stf_Cd, Guid tam_Cd, int state, string cio_Ymd, string cio_Day, string in_Hh_Mm, string out_Hh_Mm)
        {
            string from = in_Hh_Mm;
            string to = out_Hh_Mm;
            decimal psn_Cd = _db.Accounts.FirstOrDefault(u => u.Stf_Cd.Equals(stf_Cd)).Psn_Cd;

            AnnualLeaveConfirm annualLeaveConfirm = new AnnualLeaveConfirm()
            {
                Alc_Cd = Guid.NewGuid(),
                Alc_Map_Cd = tam_Cd,
                Alc_Day = cio_Ymd,
                Alc_Ymd = cio_Day,
                Alc_State = state,
                Insert_Ymd = DateTime.Now,
                Insert_Psn_Cd = psn_Cd,
                From_Hh_Mm = from,
                To_Hh_Mm = to,
                Alc_Duration = TamUtils.CalculateDuration(from, to)
            };

            _db.AnnualLeaveConfirm.Add(annualLeaveConfirm);
            return Constants.SUCCESS;
        }
    }
}
