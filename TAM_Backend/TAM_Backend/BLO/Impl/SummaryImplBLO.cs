using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Common;
using TAM_Backend.DAO;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.BLO.Impl
{
    public class SummaryImplBLO : ISummaryBLO
    {
        private readonly ICommonDAO _commonDao;
        private readonly ISummaryDAO _summaryDao;
        public SummaryImplBLO(ICommonDAO commonDao, ISummaryDAO summaryDao)
        {
            this._commonDao = commonDao;
            this._summaryDao = summaryDao;
        }

        public string RegistSummary(JsonSummary jsSummary)
        {
            var tam_Cd = _commonDao.GetTamCd(jsSummary.Stf_Cd);
            _summaryDao.RegistSummary(tam_Cd, jsSummary.Year, jsSummary.Month);
            return Constants.SUCCESS;
        }
    }
}
