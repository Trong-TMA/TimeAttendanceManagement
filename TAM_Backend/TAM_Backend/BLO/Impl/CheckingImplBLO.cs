using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Common;
using TAM_Backend.DAO;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.BLO.Impl
{
    public class CheckingImplBLO : ICheckingBLO
    {
        private ICommonDAO _commonDao { get; set; }
        private ICheckingDAO _checkingDao { get; set; }

        public CheckingImplBLO(ICommonDAO commonDao, ICheckingDAO checkingDao)
        {
            this._commonDao = commonDao;
            this._checkingDao = checkingDao;
        }

        public string DoCheckIn(JsonChecking jsChecking)
        {
            var tam_Cd = _commonDao.GetTamCd(jsChecking.Stf_Cd);

            if (jsChecking.Stf_Cd != null)
            {
                _checkingDao.CheckIn((decimal) jsChecking.Stf_Cd, tam_Cd, jsChecking.Cio_Ymd, jsChecking.Cio_Day, jsChecking.In_Hh_Mm);

                return Constants.SUCCESS;
            }
            else
            {
                return Constants.ERROR;
            }
        }

        public string DoCheckOut(JsonChecking jsChecking)
        {
            var tam_Cd = _commonDao.GetTamCd(jsChecking.Stf_Cd);

            if (jsChecking.Stf_Cd != null)
            {
                _checkingDao.CheckOut((decimal)jsChecking.Stf_Cd, tam_Cd, jsChecking.Cio_Ymd, jsChecking.Cio_Day, jsChecking.Out_Hh_Mm);

                return Constants.SUCCESS;
            }
            else
            {
                return Constants.ERROR;
            }
        }
    }
}
