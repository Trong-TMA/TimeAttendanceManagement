using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.Model;

namespace TAM_Backend.DataContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Department> Departments { get; set; }
        public DbSet<Staff> Staffs { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<TAManager> TAManagers { get; set; }
        public DbSet<StfTamMapping> StfTamMappings { get; set; }
        public DbSet<DpmRole> DpmRoles { get; set; }
        public DbSet<CheckInOut> CheckInOuts { get; set; }
        public DbSet<IPNetwork> IPNetworks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StfTamMapping>()
                .HasKey(p => new { p.Tam_Cd, p.Stf_Cd });
        }
    }
}
