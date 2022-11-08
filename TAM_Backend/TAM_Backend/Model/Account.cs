using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("Account")]
    public class Account : BaseEntity
    {
        [Key]
        public decimal Psn_Cd { get; set; }
        [Column("STF_CD")]
        public decimal? Stf_Cd { get; set; }
        [Column("USERID")]
        public string UserId { get; set; }
        [Column("PASSWORD")]
        public string Password { get; set; }

        [ForeignKey("Stf_Cd")]
        public virtual Staff Staff { get; set; }
    }
}
