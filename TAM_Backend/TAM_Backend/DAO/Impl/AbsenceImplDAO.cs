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

        public string RegistAbsence(Guid cio_Cd) 
        {
            var absenceInDb = _db.LeavingRegistration.Find(cio_Cd);

            if (absenceInDb == null)
            {
                return Constants.ERROR;
            }

            //Update state of absence
            absenceInDb.Cio_State = Constants.STT_001;

            _db.LeavingRegistration.Update(absenceInDb);
            _db.SaveChanges();

            return Constants.SUCCESS;
        }

        public string RegistAbsence(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string out_Hh_Mm)
        {
            string from = in_Hh_Mm;
            string to = out_Hh_Mm;
            decimal psn_Cd = _db.Accounts.FirstOrDefault(u => u.Stf_Cd.Equals(stf_Cd)).Psn_Cd;

            LeavingRegistration leavingRegistration = new LeavingRegistration()
            {
                Cio_Cd = Guid.NewGuid(),
                Cio_Map_Cd = tam_Cd,
                Cio_Ymd = cio_Ymd,
                Cio_Day = cio_Day,
                Cio_State = 0,
                Insert_Ymd = DateTime.Now,
                Insert_Psn_Cd = psn_Cd,
                In_Hh_Mm = from,
                Out_Hh_Mm = to,
                Cio_Duration = TamUtils.CalculateDuration(from, to)
            };

            _db.LeavingRegistration.Add(leavingRegistration);
            return Constants.SUCCESS;
        }
    }
}
