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

        public const string HM_12_00 = "12:00";
        public const string HM_13_15 = "13:15";

        /*Database*/
        public const string STT_001 = "1";
        public const string STT_002 = "2";
        public const string STT_003 = "3";
        public const string STT_004 = "4";
        public const string STT_005 = "5";

        public const string MON = "Mon";
        public const string TUE = "Tue";
        public const string WED = "Wed";
        public const string THU = "thu";
        public const string FRI = "Fri";
        public const string SAR = "SAR";
        public const string SUN = "Sun";

        /*Api code mapping with department code*/
        /*Api Controller - Authe*/
        //Api Controller - Authe - Login
        public const string API_AUT_LOG = "APIAUTLOG";

        /*Api Controller - Checking*/
        //Api Controller - Checking - Checkin
        public const string API_CHK_CIN = "APICHKCIN";
        //Api Controller - Checking - Checkout
        public const string API_CHK_COU = "APICHKCOU";
    }
}
