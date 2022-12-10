using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TAM_Backend.BLO;
using TAM_Backend.BLO.Impl;
using TAM_Backend.DAO;
using TAM_Backend.DAO.Impl;
using TAM_Backend.DataContext;

namespace TAM_Backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Add connection service
            services.AddDbContext<AppDbContext>(options =>
            options.UseSqlServer(
                Configuration.GetConnectionString("DefaultConnection")));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "TAM_Backend", Version = "v1" });
            });

            //BLO dependence injection regist
            services.AddTransient<IAutheBLO, AutheImplBLO>();
            services.AddTransient<ICheckingBLO, CheckingImplBLO>();
            services.AddTransient<IStaffBLO, StaffImplBLO>();
            services.AddTransient<IAbsenceBLO, AbsenceImplBLO>();

            //DAO dependence injection regist
            services.AddTransient<ICommonDAO, CommonImplDAO>();
            services.AddTransient<IAutheDAO, AutheImplDAO>();
            services.AddTransient<ICheckingDAO, CheckingImplDAO>();
            services.AddTransient<IStaffDAO, StaffImplDAO>();
            services.AddTransient<IAbsenceDAO, AbsenceImplDAO>();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TAM_Backend v1"));
            }

            app.UseCors(builder =>
                    builder.WithOrigins(Configuration["ApplicationSettings:Client_URL"].ToString())
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                );
            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
