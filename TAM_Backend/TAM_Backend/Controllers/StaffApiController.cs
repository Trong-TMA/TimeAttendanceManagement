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
    public class StaffApiController  : BaseApiController
    {
        private IStaffBLO _staffBlo;
        public StaffApiController(IAutheBLO autheBlo, IStaffBLO staffBlo) : base(autheBlo)
        {
            _staffBlo = staffBlo;
        }


        [HttpGet(Constants.API_GET_STF)]
        public IActionResult GetStaffs(JsonSearchChecking jsSearchChecking)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsSearchChecking.Stf_Dpm_Cd, Constants.API_CHK_COU);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                var messageDoGetState = _staffBlo.GetStaffs(jsSearchChecking);

                return new JsonResult(messageDoGetState);
            }
            else
            {
                return new JsonResult(new { message = messageAuthorize });
            }
        }
    }
}
