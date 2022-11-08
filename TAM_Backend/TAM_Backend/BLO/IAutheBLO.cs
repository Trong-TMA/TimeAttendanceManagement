using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.DAO;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.BLO
{
    public interface IAutheBLO
    {
        public abstract String DoLogin(string userId, string password);

        public abstract JsonStaff GetUserInf(string userId);
    }
}
