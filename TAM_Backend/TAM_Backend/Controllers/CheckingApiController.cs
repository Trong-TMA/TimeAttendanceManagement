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
    public class CheckingApiController : BaseApiController
    {
        private readonly ICheckingBLO _checkingBlo;
        public CheckingApiController(IAutheBLO autheBlo, ICheckingBLO checkingBlo) : base(autheBlo)
        {
            this._checkingBlo = checkingBlo;
        }

        [HttpPost(Constants.API_CHK_CIN)]
        public IActionResult CheckIn(JsonChecking jsChecking)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsChecking.Stf_Dpm_Cd, Constants.API_CHK_CIN);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                string messageDoCheckin = _checkingBlo.DoCheckIn(jsChecking);

                return new JsonResult(new { message = messageDoCheckin });
            }
            else
            {
                return new JsonResult(new { message = messageAuthorize });
            }
        }

        [HttpPost(Constants.API_CHK_COU)]
        public IActionResult CheckOut(JsonChecking jsChecking)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsChecking.Stf_Dpm_Cd, Constants.API_CHK_COU);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                string messageDoCheckout = _checkingBlo.DoCheckOut(jsChecking);

                return new JsonResult(new { message = messageDoCheckout });
            }
            else
            {
                return new JsonResult(new { message = messageAuthorize });
            }
        }

        [HttpPost(Constants.API_GET_STT)]
        public IActionResult GetState(JsonChecking jsChecking)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsChecking.Stf_Dpm_Cd, Constants.API_GET_STT);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                string messageDoGetState = _checkingBlo.GetState(jsChecking);

                return new JsonResult(new { message = messageDoGetState });
            }
            else
            {
                return new JsonResult(new { message = messageAuthorize });
            }
        }

        [HttpPost(Constants.API_GET_CHK)]
        public IActionResult GetCheckInOut(JsonSearchChecking jsSearchChecking)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsSearchChecking.Stf_Dpm_Cd, Constants.API_GET_CHK);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                var result = _checkingBlo.GetCheckInOut(jsSearchChecking);

                if (result.Equals(Constants.ERROR))
                {
                    return new JsonResult(new { message = result });
                } else
                {
                    return new JsonResult(result);
                }
                
            }
            else
            {
                return new JsonResult(new { message = messageAuthorize });
            }
        }

    }
}
