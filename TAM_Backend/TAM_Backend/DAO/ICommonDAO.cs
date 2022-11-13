using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.DAO
{
    public interface ICommonDAO
    {
        public abstract Guid GetTamCd(decimal? stf_Cd);
    }
}
