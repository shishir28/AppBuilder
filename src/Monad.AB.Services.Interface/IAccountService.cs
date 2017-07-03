using Monad.AB.Domain.Entities.Identity;
using Monad.AB.Domain.Entities.Dto;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Security.Claims;
using Monad.AB.Domain.Entities;

namespace Monad.AB.Services.Interface
{
    public interface IAccountService : IService
    {
        Task<SignInResult> Login(string userName, string password, bool rememberMe);
        Task<string> GetLoginToken(string userName, string password);
        Task<IdentityResult> Register(string user, string password);
        Task<IList<Claim>> GetClaims(User user);
        Task<User> GetUser(string userName);
        void LogOff(string userName);

        Task<string> GenerateEmailConfirmationToken(User user);
        Task<string> GetUserId(User user);
        Task<User> GetUserById(string userId);

        Task<IdentityResult> AddRole(Role role);
        Task<IdentityResult> UpdateRole(Role role);

        #region User Management
        IList<AggregatedUserDto> GetAllUsers();
        Task<IdentityResult> AddUser(User applicationUser, UserProfile userProfile, string roleId);
        Task<IdentityResult> EditUser(User applicationUser, UserProfile userProfile, string roleId);
        Task<AggregatedUserDto> GetUserByUserId(string userId);

        #endregion User Management

    }
}
