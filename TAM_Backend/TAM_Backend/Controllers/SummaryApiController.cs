using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.BLO;
using TAM_Backend.Common;
using TAM_Backend.Controllers.Common;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.Controllers
{
    public class SummaryApiController : BaseApiController
    {
        private readonly ISummaryBLO _summaryBlo;
        public SummaryApiController(IAutheBLO autheBlo, ISummaryBLO summaryBlo) : base(autheBlo)
        {
            this._summaryBlo = summaryBlo;
        }

        [HttpPost(Constants.API_REG_SMR)]
        public IActionResult RegistSummary(JsonSummary jsSummary)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsSummary.Stf_Dpm_Cd, Constants.API_REG_SMR);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                string message = _summaryBlo.RegistSummary(jsSummary);

                return new JsonResult(new { message = message });
            }
            else
            {
                return new JsonResult(new { message = messageAuthorize });
            }
        }

        [HttpPost(Constants.API_CAL_SAL)]
        public IActionResult CalculateSalary (JsonCalculateSalary jsCalSalary)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsCalSalary.Stf_Dpm_Cd, Constants.API_CAL_SAL);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                string message = _summaryBlo.CalculateSalary(jsCalSalary.SalaryList);

                return new JsonResult(new { message = message });
            }
            else
            {
                return new JsonResult(new { message = messageAuthorize });
            }
        }

        [HttpPost(Constants.API_GET_SAL)]
        public IActionResult GetSalary(JsonStaff jsStaff)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsStaff.Stf_Dpm_Cd, Constants.API_GET_SAL);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                var result = _summaryBlo.GetSalaryTable(ToDecimal(jsStaff.Stf_Cd));

                return new JsonResult(result);
            }
            else
            {
                return new JsonResult(new { message = messageAuthorize });
            }
        }
        private decimal ToDecimal(decimal? source)
        {
            return source ?? decimal.Zero;
        }
    }
}
