﻿using Monad.AB.Domain.Entities.Identity;
using  Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Security.Claims;

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
    }
}
