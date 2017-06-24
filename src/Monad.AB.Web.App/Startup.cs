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
using Microsoft.AspNetCore.Authorization;
using System;
using System.Threading.Tasks;
using System.Security.Claims;

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
            services.AddOptions();
            var serviceProvider = services.BuildServiceProvider();
            var options = serviceProvider.GetRequiredService<IOptions<AppSettings>>();
            key = RSAKeyUtils.GetKey(options.Value.SecurityKeyFileName);
            tokenOptions = new TokenAuthOptions("ExampleAudience", "ExampleIssuer", key);
            services.AddSingleton<TokenAuthOptions>(tokenOptions);
            services.AddAuthorization(auth =>
            {
                auth.AddPolicy(TokenAuthOptions.Scheme, new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(TokenAuthOptions.Scheme)
                    .RequireAuthenticatedUser()
                    .AddRequirements(new TokenAuthRequirement())
                    .Build());
            });
            services.AddMvc();
            DependencyInstaller.InjectDependencies(services, this.Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.Use(new UnhandledExceptionMiddleware().Process);
            app.Use(new PerformanceLoggingMiddleware().Process);
            app.Use(new TokenReaderMiddleware().Process);

            var options = new JwtBearerOptions()
            {
                TokenValidationParameters = new TokenValidationParameters
                {
                    IssuerSigningKey = key,
                    ValidAudience = tokenOptions.Audience,
                    ValidIssuer = tokenOptions.Issuer,
                    ValidateIssuerSigningKey = true,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.FromMinutes(0),
                },
                AuthenticationScheme = TokenAuthOptions.Scheme,
                Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        context.Token = Convert.ToString(context.HttpContext.Items["x-access-token"]);
                        return Task.FromResult(0);
                    },
                    OnTokenValidated = context =>
                     {
                         string authHeader = context.HttpContext.Request.Headers["Authorization"];
                         authHeader = authHeader ?? "";
                         string path = context.HttpContext.Request.Path.ToString() ?? "";
                         var identity = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Authentication, authHeader), new Claim(ClaimTypes.Uri, path) },
                                                TokenAuthOptions.Scheme);
                         context.Ticket.Principal.AddIdentity(identity);
                         return Task.FromResult(0);
                     }
                }
            };
            app.UseJwtBearerAuthentication(options);

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

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
            app.UseIdentity();
            app.UseMvc();
            app.UseStaticFiles();
            AutoMapperBootStrapper.Bootstrap();
        }
    }
}
