using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model;

namespace TAM_Backend.DAO
{
    public interface ICheckingDAO
    {
        public abstract string CheckIn(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string ip_In_Log);
        public abstract string CheckOut(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string out_Hh_Mm, string ip_Out_Log);
        public abstract string UpdateChecking(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string out_Hh_Mm);
        public abstract string CheckState(Guid tam_Cd, string cio_Ymd, string cio_Day, String ip_Chk_Log);
        public abstract IEnumerable<CheckInOut> GetCheckInOut(Guid tam_Cd, int startDay, int endDay);
        public abstract IEnumerable<CheckInOut> GetCheckInOut(Guid tam_Cd, int month);
    }
}
