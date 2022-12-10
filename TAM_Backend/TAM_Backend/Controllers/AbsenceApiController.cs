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
    public class AbsenceApiController : BaseApiController
    {
        public IAbsenceBLO _absenceBlo { get; set; }
        public AbsenceApiController(IAutheBLO autheBlo, IAbsenceBLO absenceBlo) : base(autheBlo)
        {
            _absenceBlo = absenceBlo;
        }

        [HttpPost(Constants.API_GET_ABS)]
        public IActionResult GetAbsence(JsonAbsence jsAbsence)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsAbsence.Stf_Dpm_Cd, Constants.API_GET_ABS);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                var result = _absenceBlo.GetAbsences(jsAbsence);

                if (result.Equals(Constants.ERROR))
                {
                    return new JsonResult(new { message = result });
                }
                else
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
