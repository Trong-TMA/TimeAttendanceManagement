using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("StfTamMapping")]
    public class StfTamMapping : BaseEntity
    {
        [Key, Column(Order = 0)]
        public Guid Tam_Cd { get; set; }
        [Key, Column(Order = 1)]
        public decimal Stf_Cd { get; set; }
        [Column("UPDATE_PSN_CD")]
        public decimal? Update_Psn_Cd { get; set; }

        [ForeignKey("Tam_Cd")]
        public virtual TAManager TAManager { get; set; }
        [ForeignKey("Stf_Cd")]
        public virtual Staff Staff { get; set; }
    }
}
