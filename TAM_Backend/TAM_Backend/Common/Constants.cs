using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Common
{
    public class Constants
    {
        /*AutheBLO message*/
        //Invalid user or password.
        public static string ERR_MSG_001 = "Invalid user or password.";
        //Failed Authetication.
        public static string ERR_MSG_002 = "Failed Authetication.";

        /*Return type*/
        public const string SUCCESS = "SUCCESS";
        public const string FAIL = "FAIL";
        public const string ERROR = "ERROR";

        public const string HM_08_00 = "08:00";
        public const string HM_09_00 = "09:00";
        public const string HM_12_00 = "12:00";
        public const string HM_13_15 = "13:15";
        public const string HM_17_15 = "17:15";

        //Wrong IP
        public const string STT_IP = "-1";
        //Waiting for checkin
        public const string STT_IN = "0";
        //Waiting for checkout
        public const string STT_OUT = "1";
        //Checked done
        public const string STT_DONE = "2";

        /*Database*/
        //Early to work, work not enough required time
        public const int STT_000 = 0;
        //Early to work, , work enough required time
        public const int STT_001 = 1;
        //Late to work, not working stoppage
        public const int STT_002 = 2;
        //Late to work, working stoppage
        public const int STT_003 = 3;
        //Holiday
        public const int STT_004 = 4;
        //Ever unknown
        public const int STT_005 = 5;

        public const string MON = "Mon";
        public const string TUE = "Tue";
        public const string WED = "Wed";
        public const string THU = "Thu";
        public const string FRI = "Fri";
        public const string SAT = "Sat";
        public const string SUN = "Sun";

        public const int LIMIT_500 = 500;

        /*Post*/
        public const string GET_BY_WEEK = "week";
        public const string GET_BY_MONTH= "month";

        /*Api code mapping with department code*/
        /*Api Controller - Authe*/
        //Api Controller - Authe - Login
        public const string API_AUT_LOG = "APIAUTLOG";

        /*Api Controller - Checking*/
        //Api Controller - Checking - Checkin
        public const string API_CHK_CIN = "APICHKCIN";
        //Api Controller - Checking - Checkout
        public const string API_CHK_COU = "APICHKCOU";
        //Api Controller - Checking - GetState
        public const string API_GET_STT = "APIGETSTT";
        //Api Controller - Checking - GetChecking
        public const string API_GET_CHK = "APIGETCHK";
        //Api Controller - Checking - GetCalendar
        public const string API_GET_CLD = "APIGETCLD";

        /*Api Controller - Staff*/
        //Api Controller - Staff - Get Staffs
        public const string API_GET_STF = "APIGETSTF";
        //Api Controller - Department - Get Departments
        public const string API_GET_DPM = "APIGETDPM";

        /*Api Controller - Absence*/
        //Api Controller - Absence - Get absence
        public const string API_GET_ABS = "APIGETABS";
        public const string API_REG_ABS = "APIREGABS";
        public const string API_GET_CFM = "APIGETCFM";

        /*Api Controller - Summary*/
        //Api Controller - Summary - Get summary
        public const string API_REG_SMR = "APIREGSMR";
    }
}
