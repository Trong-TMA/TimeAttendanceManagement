using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("SUMMARY")]
    public class Summary : BaseEntity
    {
        [Key]
        public Guid Sal_Cd { get; set; }
        [Column("SMR_MAP_CD")]
        public Guid Smr_Map_Cd { get; set; }
        [Column("SMR_Year")]
        public int Smr_Year { get; set; }
        [Column("SMR_MONTH")]
        public int Smr_Month { get; set; }
        [Column("SMR_DAYS")]
        public decimal Smr_Days { get; set; }
        [Column("SMR_TIMES")]
        public decimal Smr_Times { get; set; }
        [Column("SMR_MINS")]
        public decimal Smr_Mins { get; set; }

        [ForeignKey("Smr_Map_Cd")]
        public virtual TAManager TAManager { get; set; }
    }
}
