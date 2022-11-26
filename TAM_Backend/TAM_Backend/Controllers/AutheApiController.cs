using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using TAM_Backend.BLO;
using TAM_Backend.Common;
using TAM_Backend.Controllers.Common;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.Controllers
{
    public class AutheApiController : BaseApiController
    {
        public AutheApiController(IAutheBLO autheBlo) : base(autheBlo)
        {
            
        }

        [HttpPost(Constants.API_AUT_LOG)]
        public IActionResult Login(JsonUser jsUser)
        {
            String message = _autheBlo.DoLogin(jsUser.UserId, jsUser.Password);
            JsonStaff jsStaff;

            if (!string.IsNullOrEmpty(message))
            {
                jsStaff = new JsonStaff()
                {
                    Message = message
                };
            }
            else
            {
                jsStaff = _autheBlo.GetUserInf(jsUser.UserId);

            }

            return new JsonResult(jsStaff);
        }

    }
}
