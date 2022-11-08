using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("Staff")]
    public class Staff : BaseEntity
    {
        [Key]
        public decimal Stf_Cd { get; set; }
        [Column("STF_DPM_CD")]
        public decimal? Stf_Dpm_Cd { get; set; }
        [Column("STF_NAME")]
        public string Stf_Name { get; set; }
        [Column("STF_SEX")]
        public string Stf_Sex { get; set; }
        [Column("STF_BIRTHDAY")]
        public string Stf_Birthday { get; set; }
        [Column("STF_EMAIL")]
        public string Stf_Email { get; set; }
        [Column("STF_PHONE_NUM")]
        public string Stf_Phone_Num { get; set; }
        [Column("UPDATE_PSN_CD")]
        public decimal? Update_Psn_Cd { get; set; }

        [ForeignKey("Stf_Dpm_Cd")]
        public virtual Department Department { get; set; }
        public virtual ICollection<Account> Accounts { get; set; }

        //public virtual ICollection<StfTamMapping> StfTamMappings { get; set; }
    }
}
