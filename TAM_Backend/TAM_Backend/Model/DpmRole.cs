using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("DpmRole")]
    public class DpmRole : BaseEntity
    {
        [Key]
        public Guid Dpm_Role_Cd { get; set; }
        public decimal Dpm_Cd { get; set; }
        public string Api_Cd { get; set; }
        public string Api_Dcs { get; set; }

        [ForeignKey("Dpm_Cd")]
        public virtual Department Department { get; set; }
    }
}
