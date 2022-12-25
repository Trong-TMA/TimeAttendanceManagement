using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model.Common;

namespace TAM_Backend.Model
{
    [Table("SALARYTABLE")]
    public class SalaryTable : BaseEntity
    {
        [Key]
        public Guid St_Cd { get; set; }
        [Column("ST_MAP_CD")]
        public Guid St_Map_Cd { get; set; }
        [Column("ST_Year")]
        public int St_Year { get; set; }
        [Column("ST_MONTH")]
        public int St_Month { get; set; }
        [Column("ST_DAYS")]
        public decimal St_Days { get; set; }
        [Column("ST_TIMES")]
        public decimal St_Times { get; set; }
        [Column("ST_ALLOWANCE")]
        public long St_Allowance { get; set; }
        [Column("ST_BONUS")]
        public long St_Bonus { get; set; }
        [Column("ST_TOTAL")]
        public long St_Total { get; set; }

        [ForeignKey("St_Map_Cd")]
        public virtual TAManager TAManager { get; set; }
    }
}
