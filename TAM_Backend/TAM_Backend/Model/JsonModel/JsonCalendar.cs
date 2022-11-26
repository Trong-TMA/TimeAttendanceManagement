using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.JsonModel
{
    public class JsonCalendar
    {
        public string Date { get; set; }
        public string DayOfWeek { get; set; }
        public int Week { get; set; }
    }
}
