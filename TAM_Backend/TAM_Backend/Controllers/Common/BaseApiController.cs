using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using System;
using TAM_Backend.BLO;
using TAM_Backend.DataContext;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.Controllers.Common
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        protected IAutheBLO _autheBlo { get; set; }

        public BaseApiController(IAutheBLO autheBlo)
        {
            this._autheBlo = autheBlo;
        }
    }
}
