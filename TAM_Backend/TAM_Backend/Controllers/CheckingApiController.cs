﻿using Microsoft.AspNetCore.Mvc;
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
        private ICheckingBLO _checkingBlo;
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
    }
}