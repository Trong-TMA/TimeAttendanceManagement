using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("LeavingRegistration")]
    public class LeavingRegistration : BaseEntity
    {
        [Key]
        public Guid Cio_Cd { get; set; }
        [Column("CIO_MAP_CD")]
        public Guid Cio_Map_Cd { get; set; }
        [Column("CIO_YMD")]
        public String Cio_Ymd { get; set; }
        [Column("CIO_DAY")]
        public String Cio_Day { get; set; }
        [Column("IN_HH_MM")]
        public String In_Hh_Mm { get; set; }
        [Column("OUT_HH_MM")]
        public String Out_Hh_Mm { get; set; }
        [Column("CIO_DURATION")]
        public int Cio_Duration { get; set; }
        [Column("CIO_STATE")]
        public int Cio_State { get; set; }
        [Column("IP_IN_LOG")]
        public String Ip_In_Log { get; set; }
        [Column("IP_OUT_LOG")]
        public String Ip_Out_Log { get; set; }
        [Column("UPDATE_PSN_CD")]
        public decimal? Update_Psn_Cd { get; set; }

        [ForeignKey("Cio_Map_Cd")]
        public virtual TAManager TAManager { get; set; }
    }
}
