using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Monad.AB.Common.StateManagement;
using Monad.AB.Domain.Entities.Identity;
using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Security;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
namespace Monad.AB.Web.App.Policies
{
    public class TokenAuthRequirement : AuthorizationHandler<TokenAuthRequirement>, IAuthorizationRequirement
    {
        public override Task HandleAsync(AuthorizationHandlerContext context)
        {
            return base.HandleAsync(context);
        }
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, TokenAuthRequirement requirement)
        {
            var httpContext = (context.Resource as Microsoft.AspNetCore.Mvc.Filters.AuthorizationFilterContext).HttpContext;
            var request = httpContext.Request;
            if (SecurityHelper.SkipRequired(request.Path))
            {
                context.Succeed(requirement);
            }
            if (IsAuthorizedForRequestedAction(context, requirement))
            {
                context.Succeed(requirement);
            }
            else
            {
                context.Fail();
            }
            return Task.FromResult(0);
        }
        private bool IsAuthorizedForRequestedAction(AuthorizationHandlerContext context, TokenAuthRequirement requirement)
        {
            var httpContext = (context.Resource as Microsoft.AspNetCore.Mvc.Filters.AuthorizationFilterContext).HttpContext;
            var routeData = httpContext.Request.Path;
            var cacheInstance = httpContext.RequestServices.GetService(typeof(ICacheProvider)) as ICacheProvider;
            var authService = httpContext.RequestServices.GetService(typeof(IAuthService)) as IAuthService;
            var requestedUserName = Convert.ToString(httpContext.Items["x-access-username"]);
            if (string.IsNullOrEmpty(requestedUserName))
                return false;

            var tobeMathedClaim = routeData.Value.Replace("/api/", "").ToLower();
            var currentCacheKey = string.Format("User-{0}-{1}", requestedUserName, tobeMathedClaim);
            if (!cacheInstance.Contains(currentCacheKey))
            {
                var currentUserCacheKey = string.Format("User-{0}", requestedUserName);
                if (!cacheInstance.Contains(currentUserCacheKey))
                {
                    var usr = authService.GetUser(requestedUserName).Result;
                    cacheInstance.Set<User>(currentUserCacheKey, usr, 1200);
                }
                var currentUserClaimsCacheKey = string.Format("**UserClaims-{0}", requestedUserName);
                if (!cacheInstance.Contains(currentUserClaimsCacheKey))
                {
                    var claims = authService.GetClaims(cacheInstance.Get<User>(currentUserCacheKey)).Result;
                    cacheInstance.Set<IList<Claim>>(currentUserClaimsCacheKey, claims, 1200);
                }
                var permission = cacheInstance.Get<IList<Claim>>(currentUserClaimsCacheKey).Where(x => tobeMathedClaim.Contains(x.Value.ToLower())).Select(y => y.Value).FirstOrDefault();
                cacheInstance.Set<string>(currentCacheKey, permission, 1200);
            }
            var result = cacheInstance.Get<string>(currentCacheKey);
            return (!string.IsNullOrWhiteSpace(result));
        }
    }
}