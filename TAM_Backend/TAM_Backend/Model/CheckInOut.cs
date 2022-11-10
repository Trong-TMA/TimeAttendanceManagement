using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("CheckInOut")]
    public class CheckInOut : BaseEntity
    {
        [Column("UPDATE_PSN_CD")]
        public decimal? Update_Psn_Cd { get; set; }
    }
}
