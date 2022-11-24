using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("Salary")]
    public class Salary : BaseEntity
    {
        [Key]
        public Guid Sal_Cd { get; set; }
        [Column("SAL_MAP_CD")]
        public Guid Sal_Map_Cd { get; set; }
        [Column("SAL_COEF")]
        public decimal Sal_Coef { get; set; }
        [Column("SAL_BASE")]
        public long Sal_Base { get; set; }
        [Column("UPDATE_PSN_CD")]
        public decimal? Update_Psn_Cd { get; set; }

        [ForeignKey("Sal_Map_Cd")]
        public virtual TAManager TAManager { get; set; }
    }
}
