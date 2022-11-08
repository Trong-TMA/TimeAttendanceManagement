using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TAM_Backend.Model.Common
{
    public class BaseEntity
    {
        [Column("DELETE_YMD")]
        public DateTime? Delete_Ymd { get; set; }
        [Column("INSERT_YMD")]
        public DateTime? Insert_Ymd { get; set; }
        [Column("UPDATE_YMD")]
        public DateTime? Update_Ymd { get; set; }
        [Column("INSERT_PSN_CD")]
        public decimal? Insert_Psn_Cd { get; set; }
    }
}
