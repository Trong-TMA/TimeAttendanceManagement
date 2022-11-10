using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Common
{
    public class Constants
    {
        /*AutheBLO message*/
        public static string ERR_MSG_001 = "Invalid user or password.";

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
