using Monad.AB.Domain.Entities.Identity;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Monad.AB.Services.Interface
{
    public interface IAuthService
    {
        Task<User> GetUser(string userName);
        Task<IList<Claim>> GetClaims(User user);
    }
}
