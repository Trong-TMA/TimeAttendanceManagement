using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.DAO
{
    public interface ICheckingDAO
    {
        public abstract String CheckIn(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string ip_In_Log);
        public abstract String CheckOut(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string out_Hh_Mm, string ip_Out_Log);
        public abstract String UpdateChecking(decimal stf_Cd, Guid tam_Cd, string cio_Ymd, string cio_Day, string in_Hh_Mm, string out_Hh_Mm);
    }
}
