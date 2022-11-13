using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.JsonModel;

namespace TAM_Backend.BLO
{
    public interface ICheckingBLO
    {
        public abstract String DoCheckIn(JsonChecking jsChecking);

        public abstract String DoCheckOut(JsonChecking jsChecking);
    }
}
