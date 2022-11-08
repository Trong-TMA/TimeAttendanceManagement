using Microsoft.AspNetCore.Mvc;
using System;
using TAM_Backend.BLO;
using TAM_Backend.Controllers.Common;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.Controllers
{
    public class AutheApiController : BaseApiController
    {
        private IAutheBLO _autheBlo { get; set; }

        public AutheApiController(IAutheBLO autheBlo)
        {
            this._autheBlo = autheBlo;
        }

        [HttpGet("login")]
        public IActionResult Login(string userId, string password)
        {
            String message = _autheBlo.DoLogin(userId, password);
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
                jsStaff = _autheBlo.GetUserInf(userId);

            }

            return new JsonResult(jsStaff);
        }
        
    }
}
