using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.DataContext;

namespace TAM_Backend.DAO.Impl
{
    public class CommonImplDAO : ICommonDAO
    {
        private AppDbContext _db { get; set; }

        public CommonImplDAO(AppDbContext db)
        {
            this._db = db;
        }

        public Guid GetTamCd(decimal? stf_Cd)
        {
            Guid tam_Cd = _db.StfTamMappings.FirstOrDefault(u => u.Stf_Cd == stf_Cd).Tam_Cd;
            return tam_Cd;
        }
    }
}
