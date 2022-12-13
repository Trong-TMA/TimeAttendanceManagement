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
    public class AbsenceImplBLO : IAbsenceBLO
    {
        private readonly ICommonDAO _commonDao;
        private readonly IAbsenceDAO _absenceDAO;

        public AbsenceImplBLO(ICommonDAO commonDao, IAbsenceDAO absenceDAO)
        {
            _commonDao = commonDao;
            _absenceDAO = absenceDAO;
        }

        public Object GetAbsences(JsonAbsence jsAbsence)
        {
            try
            {
                int month = Convert.ToInt32(jsAbsence.Month);
                if (1 <= month && month <= 12)
                {
                    var tam_Cd = _commonDao.GetTamCd(jsAbsence.Stf_Cd);
                    var resultList = _absenceDAO.GetLeavingRegistration(tam_Cd, month);

                    return resultList;
                } 

                return Constants.ERROR;
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return Constants.ERROR;
            }
            
        }

        public string RegistAbsence(JsonAnnualLeaveRegist jsAnnualLeave)
        {
            if (jsAnnualLeave.Alc_Cd != null)
            {
                _absenceDAO.RegistAbsence(ToGuid(jsAnnualLeave.Alc_Cd), jsAnnualLeave.State);

                return Constants.SUCCESS;
            } else
            {
                var tam_Cd = _commonDao.GetTamCd(jsAnnualLeave.Stf_Cd);
                _absenceDAO.RegistAbsence(ToDecimal(jsAnnualLeave.Stf_Cd), 
                    tam_Cd, 
                    jsAnnualLeave.State, 
                    jsAnnualLeave.Alc_Ymd, 
                    TamUtils.GetDayOfWeek(jsAnnualLeave.Alc_Ymd), 
                    jsAnnualLeave.In_Hh_Mm, 
                    jsAnnualLeave.Out_Hh_Mm);

                return Constants.SUCCESS;
            }
        }

        private Guid ToGuid(Guid? source)
        {
            return source ?? Guid.Empty;
        }

        private decimal ToDecimal(decimal? source)
        {
            return source ?? decimal.Zero;
        }
    }
}
