using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("AnnualLeaveConfirm")]
    public class AnnualLeaveConfirm : BaseEntity
    {
        [Key]
        public Guid Alc_Cd { get; set; }
        [Column("ALC_MAP_CD")]
        public Guid Alc_Map_Cd { get; set; }
        [Column("ALC_YMD")]
        public string Alc_Ymd { get; set; }
        [Column("ALC_DAY")]
        public string Alc_Day { get; set; }
        [Column("FROM_HH_MM")]
        public string From_Hh_Mm { get; set; }
        [Column("TO_HH_MM")]
        public string To_Hh_Mm { get; set; }
        [Column("ALC_DURATION")]
        public int Alc_Duration { get; set; }
        [Column("ALC_STATE")]
        public int Alc_State { get; set; }
        [Column("UPDATE_PSN_CD")]
        public decimal? Update_Psn_Cd { get; set; }

        [ForeignKey("Alc_Map_Cd")]
        public virtual TAManager TAManager { get; set; }
    }
}
