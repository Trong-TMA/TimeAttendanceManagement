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
        private readonly ICommonDAO _commonDao;
        private readonly ICheckingDAO _checkingDao;

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
                    return _checkingDao.CheckIn((decimal)jsChecking.Stf_Cd, tam_Cd, jsChecking.Cio_Ymd, cio_Day, jsChecking.Hh_Mm, jsChecking.Ip_Chk_Log);
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
                    return _checkingDao.CheckOut((decimal)jsChecking.Stf_Cd, tam_Cd, jsChecking.Cio_Ymd, cio_Day, jsChecking.Hh_Mm, jsChecking.Ip_Chk_Log);
                }
                
            }

            return Constants.ERROR;
        }

        

        public string GetState(JsonChecking jsChecking)
        {
            var tam_Cd = _commonDao.GetTamCd(jsChecking.Stf_Cd);

            if (CheckInput(jsChecking))
            {
                string cio_Day = GetDayOfWeek(jsChecking.Cio_Ymd);
                return _checkingDao.CheckState(tam_Cd, jsChecking.Cio_Ymd, cio_Day, jsChecking.Ip_Chk_Log);
            }

            return Constants.ERROR;
            
        }
        public object GetCheckInOut(JsonSearchChecking jsSearchChecking)
        {
            var tam_Cd = _commonDao.GetTamCd(jsSearchChecking.Stf_Cd);

            if (CheckInputSearchChecking(jsSearchChecking))
            {
                switch (jsSearchChecking.GetMode)
                {
                    case Constants.GET_BY_WEEK:
                        DateTime fromDay = ParseToDateTime(jsSearchChecking.StartDay);
                        DateTime toDay = ParseToDateTime(jsSearchChecking.EndDay);

                        return _checkingDao.GetCheckInOut(tam_Cd, fromDay, toDay);
                    case Constants.GET_BY_MONTH:
                        try
                        {
                            int month = Int32.Parse(jsSearchChecking.Month);

                            return _checkingDao.GetCheckInOut(tam_Cd, month);
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine(ex.Message);
                            return Constants.ERROR;
                        }
                }
            }

            return Constants.ERROR;
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

        private bool CheckInput(JsonChecking jsChecking)
        {
            //Check yyyymmdd format
            if (string.IsNullOrEmpty(GetDayOfWeek(jsChecking.Cio_Ymd)))
            {
                return false;
            }
            //Check hh:mm format
            if (!string.IsNullOrEmpty(jsChecking.Hh_Mm) && TamUtils.ConvertToMinute(jsChecking.Hh_Mm) == -1)
            {
                return false;
            }
            else if (!string.IsNullOrEmpty(jsChecking.Hh_Mm) && TamUtils.ConvertToMinute(jsChecking.Hh_Mm) == -1)
            {
                return false;
            }

            return true;
        }

        private bool CheckInputSearchChecking(JsonSearchChecking jsSearchChecking)
        {
            switch (jsSearchChecking.GetMode)
            {
                case Constants.GET_BY_WEEK:
                    //Check yyyymmdd format
                    if (string.IsNullOrEmpty(GetDayOfWeek(jsSearchChecking.StartDay)))
                    {
                        return false;
                    }

                    if (string.IsNullOrEmpty(GetDayOfWeek(jsSearchChecking.EndDay)))
                    {
                        return false;
                    }
                    break;
                case Constants.GET_BY_MONTH:
                    try
                    {
                        int month = Int32.Parse(jsSearchChecking.Month);
                        if (!(1 <= month && month <= 12))
                        {
                            return false;
                        }
                    } 
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                        return false;
                    }
                    break;
                default:
                    return false;
            }

            return true;
        }

        private DateTime ParseToDateTime(string yyyymmdd)
        {
            int date = int.Parse(yyyymmdd);

            int yyyy = date / 10000;
            date -= yyyy * 10000;
            int mm = date / 100;
            date -= mm * 100;
            int dd = date;

            DateTime datetime = new DateTime(yyyy, mm, dd);

            return datetime;
        }

    }
}
