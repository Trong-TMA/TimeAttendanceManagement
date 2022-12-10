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
        private ICommonDAO _commonDao;
        private IAbsenceDAO _absenceDAO;

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
    }
}
