using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("AnnualLeave")]
    public class AnnualLeave : BaseEntity
    {
        [Key]
        public Guid Anl_Cd { get; set; }
        [Column("ANL_MAP_CD")]
        public Guid Anl_Map_Cd { get; set; }
        [Column("ANL_YEAR")]
        public decimal Anl_Year { get; set; }
        [Column("ANL_MINUTE_LEFT")]
        public decimal Anl_Minute_Left { get; set; }
        [Column("ANL_DAY_LEFT")]
        public decimal Anl_Day_Left { get; set; }
        [Column("UPDATE_PSN_CD")]
        public decimal? Update_Psn_Cd { get; set; }

        [ForeignKey("Anl_Map_Cd")]
        public virtual TAManager TAManager { get; set; }
    }
}
