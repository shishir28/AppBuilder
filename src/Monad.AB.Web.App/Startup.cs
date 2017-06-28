using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Monad.AB.Web.App.Middlewares;
using Monad.AB.Infrastructure.DependencyResolver;
using Monad.AB.Web.App.Policies;
using Monad.AB.Common;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Monad.AB.Web.App.Security;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Monad.AB.Domain.Entities.Identity;
using System;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace Monad.AB.Web.App
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }
        private TokenAuthOptions tokenOptions = null;
        private RsaSecurityKey key;

        // This method gets called by the runtime. Use this method to add services to the container.

        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
            services.Configure<AccountSecuritySettings>(Configuration.GetSection("AccountSecuritySettings"));
            services.AddOptions();
            var serviceProvider = services.BuildServiceProvider();
            var options = serviceProvider.GetRequiredService<IOptions<AppSettings>>();
            key = RSAKeyUtils.GetKey(options.Value.SecurityKeyFileName);
            tokenOptions = new TokenAuthOptions("ExampleAudience", "ExampleIssuer", key);
            services.AddSingleton<TokenAuthOptions>(tokenOptions);
            services.AddScoped<IUserClaimsPrincipalFactory<User>, CustomClaimsPrincipalFactory>();
            this.ConfigureAuthentication(services);
            this.ConfigureAuthorization(services);
            services.AddMvc();
            DependencyInstaller.InjectDependencies(services, this.Configuration);
        }

        private void ConfigureAuthentication(IServiceCollection services)
        {
            services.AddAuthentication(o =>
            {
                o.DefaultAuthenticateScheme = tokenOptions.DefaultAuthenticateScheme;
                o.DefaultChallengeScheme = tokenOptions.DefaultChallengeScheme;
            });

            services.AddJwtBearerAuthentication(o =>
            {
                o.TokenValidationParameters.IssuerSigningKey = key;
                o.TokenValidationParameters.ValidAudience = tokenOptions.Audience;
                o.TokenValidationParameters.ValidIssuer = tokenOptions.Issuer;
                o.TokenValidationParameters.ValidateLifetime = true;
                o.TokenValidationParameters.ValidateLifetime = true;

                o.Events = new JwtBearerEvents()
                {
                    //writing plumbing 
                    //OnAuthenticationFailed
                    //OnAuthenticationFailed = context =>
                    
                    OnMessageReceived = context =>
                    {
                        context.Token = Convert.ToString(context.HttpContext.Items["x-access-token"]);
                        return Task.FromResult(0);
                    },
                    //OnChallenge
                    OnTokenValidated = context =>
                    {
                        //string authHeader = context.HttpContext.Request.Headers["Authorization"];
                        //authHeader = authHeader ?? "";
                        //string path = context.HttpContext.Request.Path.ToString() ?? "";
                        //var identity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Authentication, authHeader), new Claim(ClaimTypes.Uri, path) },
                        //                       TokenAuthOptions.Scheme);
                        //context.Ticket.Principal.AddIdentity(identity);
                      
                        return Task.FromResult(0);
                    },
                    
                };
            });
        }

        private void ConfigureAuthorization(IServiceCollection services)
        {
            services.AddAuthorization(auth =>
            {
                auth.AddPolicy(TokenAuthOptions.Scheme, new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(TokenAuthOptions.Scheme)
                    .AddRequirements(new TokenAuthRequirement())
                    .Build());
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.Use(new UnhandledExceptionMiddleware().Process);
            app.Use(new PerformanceLoggingMiddleware().Process);
            app.Use(new TokenReaderMiddleware().Process);
           
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 &&
                    !Path.HasExtension(context.Request.Path.Value) &&
                    !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });
            app.UseStaticFiles();
            app.UseAuthentication();            
            app.UseMvc();
            AutoMapperBootStrapper.Bootstrap();
        }
    }
}
