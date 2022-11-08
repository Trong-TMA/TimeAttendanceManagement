using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("Department")]
    public class Department : BaseEntity
    {
        [Key]
        public decimal Dpm_Cd { get; set; }
        [Column("DPM_NAME")]
        public string Dpm_Name { get; set; }

        public virtual ICollection<Staff> Staffs { get; set; }
    }
}
