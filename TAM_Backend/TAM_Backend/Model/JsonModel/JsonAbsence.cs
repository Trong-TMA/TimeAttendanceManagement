using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonAbsence : JsonStaff
    {
        public string Month { get; set; }
    }
}
