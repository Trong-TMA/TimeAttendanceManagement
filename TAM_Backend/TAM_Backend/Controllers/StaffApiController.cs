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
        private readonly IStaffBLO _staffBlo;
        public StaffApiController(IAutheBLO autheBlo, IStaffBLO staffBlo) : base(autheBlo)
        {
            _staffBlo = staffBlo;
        }


        [HttpPost(Constants.API_GET_STF)]
        public IActionResult GetStaffs(JsonSearchStaff jsSearchStaff)
        {
            string messageAuthorize = _autheBlo.Authorize((decimal)jsSearchStaff.Stf_Dpm_Cd, Constants.API_GET_STF);

            if (string.IsNullOrEmpty(messageAuthorize))
            {
                var staff_List = _staffBlo.GetStaffs(jsSearchStaff);

                return new JsonResult(staff_List);
            }
            else
            {
                return new JsonResult(new { message = messageAuthorize });
            }
        }
    }
}
