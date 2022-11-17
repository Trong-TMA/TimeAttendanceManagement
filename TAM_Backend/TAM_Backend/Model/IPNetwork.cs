using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("IPNetwork")]
    public class IPNetwork : BaseEntity
    {
        [Key]
        public string Ip_Public { get; set; }
    }
}
