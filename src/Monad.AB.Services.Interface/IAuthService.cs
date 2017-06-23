using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Security.Claims;
using Monad.AB.Domain.Entities.Identity;

namespace Monad.AB.Services.Interface
{
    public interface IAuthService
    {
        Task<User> GetUser(string userName);
        Task<IList<Claim>> GetClaims(User user);
    }
}
