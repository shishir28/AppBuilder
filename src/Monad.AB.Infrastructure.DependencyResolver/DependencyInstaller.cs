﻿
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Monad.AB.Common.StateManagement;
using Monad.AB.Common;
using Monad.AB.Domain.Entities.Identity;
using Monad.AB.Domain.Interfaces.Identity;
using Monad.AB.Domain.Interfaces;
using Monad.AB.Infrastructure.Data.Identity;
using Monad.AB.Infrastructure.Data;
using Monad.AB.Infrastructure.StateManagement.Cache.Providers;
using Monad.AB.Services.Business;
using Monad.AB.Services.Interface.CodeGenerators;
using Monad.AB.Services.Interface;

namespace Monad.AB.Infrastructure.DependencyResolver
{
    public static class DependencyInstaller
    {
        public static void InjectDependencies(IServiceCollection services, IConfiguration configuration)
        {
            InjectDependenciesForDAL(services, configuration);
            InjectDependenciesForBL(services);
            services.AddSingleton<ICacheProvider, InMemoryCache>();
        }

        private static void InjectDependenciesForDAL(IServiceCollection services, IConfiguration configuration)
        {
            services
              .AddDbContext<SecurityDBContext>(options => options.UseSqlServer(configuration.GetConnectionString("SecurityDB")))
              .AddDbContext<ApplicationDBContext>(options => options.UseSqlServer(configuration.GetConnectionString("ApplicationDB")));

            var builder = services.AddIdentity<User, Role>()
                    .AddEntityFrameworkStores<SecurityDBContext>()
                    .AddDefaultTokenProviders();


            services.AddTransient<IRoleStore<Role>, CustomRoleStore>();
            services.AddTransient<IUserStore<User>, CustomUserStore>();
            services.AddTransient<ILookupTypeRepository, LookupTypeRepository>();
            services.AddTransient<ILookupValueRepository, LookupValueRepository>();
            services.AddTransient<IControlTypeRepository, ControlTypeRepository>();
            services.AddTransient<IFieldTypeRepository, FieldTypeRepository>();
            services.AddTransient<IFormFieldRepository, FormFieldRepository>();
            services.AddTransient<IFormRepository, FormRepository>();
            services.AddTransient<IDatabaseConfigurationRepository, DatabaseConfigurationRepository>();
            services.AddTransient<IFormFieldViewRepository, FormFieldViewRepository>();
            services.AddTransient<IWebAppConfigurationRepository, WebAppConfigurationRepository>();
            services.AddTransient<IFormViewRepository, FormViewRepository>();
            services.AddTransient<IFormViewTypeRepository, FormViewTypeRepository>();
            services.AddTransient<IProjectRepository, ProjectRepository>();
            services.AddTransient<IProjectPublishStatusRepository, ProjectPublishStatusRepository>();
            services.AddTransient<IUserClaimRepository, UserClaimRepository>();
            services.AddTransient<IUserClaimRequestRepository, UserClaimRequestRepository>();

            services.AddTransient<IUserProfileRepository, UserProfileRepository>();
            services.AddTransient<IUserPasswordHistoryRepository, UserPasswordHistoryRepository>();

            services.AddTransient<IActivityRepository, ActivityRepository>();
            services.AddTransient<IActivityRoleRepository, ActivityRoleRepository>();
            services.AddTransient<IIdentityRepository, CustomUserStore>();
            services.AddTransient<IActivityRepository, ActivityRepository>();
            services.AddTransient<IResourceRepository, ResourceRepository>();
            services.AddTransient<IResourceTypeRepository, ResourceTypeRepository>();
            services.AddTransient<IRoleRightRepository, RoleRightRepository>();
            services.AddTransient<IRoleRightRequestRepository, RoleRightRequestRepository>();

            services.AddTransient<IRoleStore<Role>, CustomRoleStore>();
            services.AddTransient<IUserStore<User>, CustomUserStore>();
        }

        private static void InjectDependenciesForBL(IServiceCollection services)
        {
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IUserProfileService, UserProfileService>();
            services.AddTransient<IProjectService, ProjectService>();
            services.AddTransient<IFormService, FormService>();
            services.AddTransient<IFormFieldService, FormFieldService>();
            services.AddTransient<IFormFieldViewService, FormFieldViewService>();
            services.AddTransient<IPublishService, PublishService>();
            services.AddTransient<IAuthService, AuthService>();
            services.AddTransient<IActivityService, ActivityService>();
            services.AddTransient<IRoleService, RoleService>();
            services.AddTransient<IProjectService, ProjectService>();
        }
    }
}
