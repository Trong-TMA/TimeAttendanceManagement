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

        [HttpGet]
        public IActionResult ALogin(int year, int month)
        {
            var dateList = new List<JsonCalendar>();

            JsonCalendar jsCalendar = null;

            // Loop from the first day of the month until we hit the next month, moving forward a day at a time
            for (var date = new DateTime(year, month, 1); date.Month == month; date = date.AddDays(1))
            {
                jsCalendar = new JsonCalendar()
                {
                    Date = date.ToString("yyyyMMdd"),
                    DayOfWeek = TamUtils.GetDayOfWeek(date.ToString("yyyyMMdd"))
                };

                dateList.Add(jsCalendar);
            }

            return new JsonResult(dateList);
        }

    }
}
