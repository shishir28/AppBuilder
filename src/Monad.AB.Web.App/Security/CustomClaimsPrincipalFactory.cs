using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Monad.AB.Domain.Entities.Identity;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Builder;
using System.Security.Claims;

namespace Monad.AB.Web.App.Security
{
    public class CustomClaimsPrincipalFactory :UserClaimsPrincipalFactory<User,Role>
    {
        public CustomClaimsPrincipalFactory(UserManager<User> userManager, RoleManager<Role> roleManager, IOptions<IdentityOptions> optionsAccessor)
            :base(userManager,roleManager,optionsAccessor)
        {

        }
        public async override Task<ClaimsPrincipal> CreateAsync(User user)
        {
            var principal = await base.CreateAsync(user);
            var identity = principal.Identity as ClaimsIdentity;
            var customClaims = identity.Claims.Where(x => x.Type.Equals("Custom")).ToList();
            for (int i = 0; i < customClaims.Count; i++)
                identity.RemoveClaim(customClaims[i]);
            
            return principal;
        }
    }
}
