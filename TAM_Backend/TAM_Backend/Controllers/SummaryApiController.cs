using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.BLO;
using TAM_Backend.Controllers.Common;

namespace TAM_Backend.Controllers
{
    public class SummaryApiController : BaseApiController
    {
        private readonly ISummaryBLO _summaryBlo;
        public SummaryApiController(IAutheBLO autheBlo, ISummaryBLO summaryBlo) : base(autheBlo)
        {
            this._summaryBlo = summaryBlo;
        }
    }
}
