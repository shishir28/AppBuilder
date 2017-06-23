using Microsoft.AspNetCore.Authorization;
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
            var httpContext = (context.Resource as ActionContext).HttpContext;
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
            var httpContext = (context.Resource as ActionContext).HttpContext;
            var cacheInstance = httpContext.RequestServices.GetService(typeof(ICacheProvider)) as ICacheProvider;
            var authService = httpContext.RequestServices.GetService(typeof(IAuthService)) as IAuthService;
            var tokenAuthIdentities = context.User.Identities.Where(x => x.AuthenticationType == TokenAuthOptions.Scheme).FirstOrDefault();

            if (tokenAuthIdentities == null) return false;

            var authHeaderClaim = tokenAuthIdentities.Claims.Where(x => x.Type == ClaimTypes.Authentication).FirstOrDefault();

            var uriClaim = context.User.Claims.Where(x => x.Type == ClaimTypes.Uri).FirstOrDefault();
            var userName = context.User.Identities.Where(x => x.AuthenticationType == "AuthenticationTypes.Federation").FirstOrDefault().Name;
            if (authHeaderClaim == null || uriClaim == null) return false;
            var claimComponents = uriClaim.Value.Split('/').Skip(2).ToList();
            var tobeMathedClaim = claimComponents[0].ToLower() + "/" + claimComponents[1].ToLower();
            var currentCacheKey = string.Format("User-{0}-{1}", userName, tobeMathedClaim);
            if (!cacheInstance.Contains(currentCacheKey))
            {
                var handler = new JwtSecurityTokenHandler();
                var securityToken = handler.ReadJwtToken(Convert.ToString(httpContext.Items["x-access-token"]));
                var clm = securityToken.Claims.Where(x => string.Equals(x.Type, "unique_name", StringComparison.CurrentCultureIgnoreCase)).SingleOrDefault();
                var currentUserCacheKey = string.Format("User-{0}", userName);
                if (!cacheInstance.Contains(currentUserCacheKey))
                {
                    var usr = authService.GetUser(userName).Result;
                    cacheInstance.Set<User>(currentUserCacheKey, usr, 1200);
                }
                var currentUserClaimsCacheKey = string.Format("**UserClaims-{0}", userName);
                if (!cacheInstance.Contains(currentUserClaimsCacheKey))
                {
                    var claims = authService.GetClaims(cacheInstance.Get<User>(currentUserCacheKey)).Result;
                    cacheInstance.Set<IList<Claim>>(currentUserClaimsCacheKey, claims, 1200);
                }
                var permission = cacheInstance.Get<IList<Claim>>(currentUserClaimsCacheKey).Where(x => tobeMathedClaim.Contains(x.Type.ToLower())).Select(y => y.Value).FirstOrDefault();
                cacheInstance.Set<string>(currentCacheKey, permission, 1200);
            }
            var result = cacheInstance.Get<string>(currentCacheKey);
            return ((!string.IsNullOrWhiteSpace(result)) && (result.ToLower() == "allowed"));
        }
    }
}