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
                if (CheckInput(jsChecking))
                {
                    string cio_Day = GetDayOfWeek(jsChecking.Cio_Ymd);
                    return _checkingDao.CheckIn((decimal)jsChecking.Stf_Cd, tam_Cd, jsChecking.Cio_Ymd, cio_Day, jsChecking.In_Hh_Mm, jsChecking.Ip_In_Log);
                }
            }

            return Constants.ERROR;
        }

        public string DoCheckOut(JsonChecking jsChecking)
        {
            var tam_Cd = _commonDao.GetTamCd(jsChecking.Stf_Cd);

            if (jsChecking.Stf_Cd != null)
            {
                if (CheckInput(jsChecking))
                {
                    string cio_Day = GetDayOfWeek(jsChecking.Cio_Ymd);
                    return _checkingDao.CheckOut((decimal)jsChecking.Stf_Cd, tam_Cd, jsChecking.Cio_Ymd, cio_Day, jsChecking.Out_Hh_Mm, jsChecking.Ip_Out_Log);
                }
                
            }

            return Constants.ERROR;
        }

        private bool CheckInput(JsonChecking jsChecking)
        {
            //Check yyyymmdd format
            if (string.IsNullOrEmpty(GetDayOfWeek(jsChecking.Cio_Ymd)))
            {
                return false;
            }
            //Check hh:mm format
            if (!string.IsNullOrEmpty(jsChecking.In_Hh_Mm) && TamUtils.ConvertToMinute(jsChecking.In_Hh_Mm) == -1)
            {
                return false;
            }
            else if(!string.IsNullOrEmpty(jsChecking.Out_Hh_Mm) && TamUtils.ConvertToMinute(jsChecking.Out_Hh_Mm) == -1)
            {
                return false;
            }

            return true;
        }

        //Returns day of week from yyyymmdd
        private string GetDayOfWeek(string ymd)
        {
            try
            {
                int yyyy = Int32.Parse(ymd.Substring(0, 4));
                int mm = Int32.Parse(ymd.Substring(4, 2));
                int dd = Int32.Parse(ymd.Substring(6, 2));

                DateTime date = new DateTime(yyyy, mm, dd);

                switch (date.DayOfWeek.ToString())
                {
                    case "Monday":
                        return Constants.MON;
                    case "Tuesday":
                        return Constants.TUE;
                    case "Wednesday":
                        return Constants.WED;
                    case "Thursday":
                        return Constants.THU;
                    case "Friday":
                        return Constants.FRI;
                    case "Saturday":
                        return Constants.SAT;
                    case "Sunday":
                        return Constants.SUN;
                    default:
                        return string.Empty;
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return string.Empty;
            }
        }
    }
}
