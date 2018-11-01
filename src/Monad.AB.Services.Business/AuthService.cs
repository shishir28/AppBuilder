using Microsoft.AspNetCore.Identity;
using Monad.AB.Domain.Entities.Identity;
using Monad.AB.Services.Interface;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Monad.AB.Services.Business
{
    public class AuthService : IAuthService
    {
        public UserManager<User> UserManager { get; private set; }
        public AuthService(UserManager<User> userManager)
        {
            UserManager = userManager;
        }

        public Task<IList<Claim>> GetClaims(User user)
        {
            return Task.FromResult<IList<Claim>>(UserManager.GetClaimsAsync(user).Result);
        }

        public async Task<User> GetUser(string userName)
        {
            var user = UserManager.FindByNameAsync(userName).Result;
            return await Task.FromResult<User>(user);
        }
    }
}
