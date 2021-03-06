using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Monad.AB.Common.StateManagement;
using Monad.AB.Domain.Entities.Dto;
using Monad.AB.Domain.Entities.Identity;
using Monad.AB.Domain.Entities;
using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Models;
using Monad.AB.Web.App.Policies;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using System;

namespace Monad.AB.Web.App.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Policy = "Bearer")]
    public class AccountController : Controller
    {
        private IAccountService _accountService;
        private ICacheProvider _cacheInstance;
        private IAuthService _authService;
        private readonly TokenAuthOptions _tokenOptions;
        public AccountController(IAccountService accountService, IAuthService authService, TokenAuthOptions tokenOptions, ICacheProvider cacheInstance)
        {
            _accountService = accountService;
            _cacheInstance = cacheInstance;
            _tokenOptions = tokenOptions;
            _authService = authService;
        }

        #region Standard ASP.NET Stuff
        [HttpGet]
        [AllowAnonymous]
        public IActionResult Login(string returnUrl = null)
        {
            return null;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model, string returnUrl = null)
        {
            AccountsApiModel accountsWebApiModel = new AccountsApiModel { Authenticated = false };
            accountsWebApiModel.User.UserName = string.Empty;
            if (ModelState.IsValid)
            {
                var result = await _accountService.Login(model.UserName, model.Password, model.RememberMe);
                if (result.Succeeded)
                {
                    var token = await _accountService.GetLoginToken(model.UserName, model.Password);
                    DateTime? expires = DateTime.UtcNow.AddDays(1);
                    var currentUser = _accountService.GetUser(model.UserName).Result;
                    accountsWebApiModel.User.UserName = model.UserName;
                    accountsWebApiModel.Token = GetToken(model.UserName, currentUser, expires);
                    CacheAccessClaims(model.UserName, currentUser, expires);
                    accountsWebApiModel.Authenticated = true;
                    accountsWebApiModel.Claims = this.GetClaims(model.UserName);
                    return new ObjectResult(new { StatusCode = 200, Content = accountsWebApiModel });
                }
                //if (result.RequiresTwoFactor)
                //{
                //    return RedirectToAction("SendCode", new { ReturnUrl = returnUrl, RememberMe = model.RememberMe });
                //}
                //if (result.IsLockedOut)
                //{
                //    return View("Lockout");
                //}
                //else
                //{

                //}
            }
            return new StatusCodeResult(412);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("Register")]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [Route("LogOff")]
        public IActionResult LogOff([FromBody]LogoutViewModel model)
        {
            _accountService.LogOff(model.UserName);
            return new ObjectResult(new { StatusCode = 200, Content = $@"User  {model.UserName} logged out successfully!" });
        }

        //ForgotPassword
        //ResetPassword
        //SendCode
        //VerifyCode

        [HttpPost]
        [AllowAnonymous]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _accountService.Register(model.Email, model.Password);
                if (result.Succeeded)
                {
                    return new ObjectResult(new { StatusCode = 201, Content = $@"User with email address  {model.Email} Created!" });
                }
                else
                {
                    return new ObjectResult(new { StatusCode = 400, Content = $@"User with email address  {model.Email} could not be Created!" });
                }
            }
            return new StatusCodeResult(412);
        }


        private IList<ClaimViewModel> GetClaims(string userName)
        {
            var currentCacheKey = string.Format("UserClaims-{0}", userName);
            var claims = _cacheInstance.Get<IList<Claim>>(currentCacheKey);
            return claims.Select(x => new ClaimViewModel { ClaimType = x.Type, ClaimValue = x.Value }).ToList();
        }

        private void CacheAccessClaims(string userName, User currentUser, DateTime? expires)
        {
            var currentCacheKey = string.Format("UserClaims-{0}", userName);
            var claims = _authService.GetClaims(currentUser).Result;
            _cacheInstance.Set(currentCacheKey, claims);
        }

        private string GetToken(string user, User currentUser, DateTime? expires)
        {
            var handler = new JwtSecurityTokenHandler();

            ClaimsIdentity identity = new ClaimsIdentity(new GenericIdentity(user, "TokenAuth"));
            var descriptor = new SecurityTokenDescriptor
            {
                Issuer = _tokenOptions.Issuer,
                Audience = _tokenOptions.Audience,
                SigningCredentials = _tokenOptions.SigningCredentials,
                Subject = identity,
                Expires = expires
            };
            return handler.WriteToken(handler.CreateToken(descriptor));
        }

        #endregion Standard ASP.NET Stuff

        #region User Management
        // [Authorize("Bearer")]
        [HttpGet]
        [Route("GetAllUsers")]
        public IEnumerable<UserViewModel> GetAllUsers()
        {
            var applicationUsers = _accountService.GetAllUsers();
            return Mapper.Map<IList<AggregatedUserDto>, IEnumerable<UserViewModel>>(applicationUsers);
        }


        [HttpPost]
        [Route("AddUser")]
        public async Task<IActionResult> AddUser([FromBody] AddUserViewModel model)
        {
            if (ModelState.IsValid)
            {
                // check if any role was sent
                if (string.IsNullOrEmpty(model.RoleId))
                    return new ObjectResult(new { StatusCode = 412, Content = "No Role was selected!" });

                var user = Mapper.Map<AddUserViewModel, User>(model);
                user.LastModifiedBy = model.LastModifiedBy;

                var userprofile = Mapper.Map<AddUserViewModel, UserProfile>(model);
                userprofile.LastModifiedBy = model.LastModifiedBy;

                var result = await _accountService.AddUser(user, userprofile, model.RoleId);

                if (result.Succeeded)
                {
                    var code = await _accountService.GenerateEmailConfirmationToken(user);
                    var createdUser = await _accountService.GetUserId(user);
                    return new ObjectResult(new AddUserResultViewmodel
                    {
                        StatusCode = 201,
                        EmailConfirmationToken = code,
                        SecurityUserId = createdUser
                    });
                }
                else
                    return new ObjectResult(new { StatusCode = 412, Content = result.Errors });

            }
            return new StatusCodeResult(204);
        }

        [HttpPut]
        [Route("EditUser")]
        public async Task<IActionResult> EditUser([FromBody] UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                // check if any role was sent
                if (string.IsNullOrEmpty(model.RoleId))
                    return new ObjectResult(new { StatusCode = 400, Content = "No Role was selected!" });
                var lastModifierUserId = 1;

                var applicationUser = Mapper.Map<UserViewModel, User>(model);
                applicationUser.LastModifiedBy = lastModifierUserId;
                var user = new UserProfile
                {
                    Id = model.UserId,
                    LastName = model.LastName,
                    FirstName = model.FirstName,
                    UserName = model.UserName,
                    AddressLine1 = model.AddressLine1,
                    AddressLine2 = model.AddressLine2,
                    LastModifiedBy = lastModifierUserId,
                    City = model.City,
                    State = model.State,
                    EmailAddress = model.Email,
                    CreatedDateUtc = model.CreatedDateUtc,
                    Zip = model.Zip,
                    Gender = model.Gender
                };

                var result = await _accountService.EditUser(applicationUser, user, model.RoleId);

                if (result.Succeeded)
                {
                    return new ObjectResult(new { StatusCode = 204 });
                }
                else
                    return new ObjectResult(new { StatusCode = 400, Content = result.Errors });

            }
            return new StatusCodeResult(204);
        }

        [HttpGet]
        [Route("GetUser")]
        public UserViewModel GetUser(string userId)
        {
            var applicationUser = _accountService.GetUserByUserId(userId).Result;
            var result = Mapper.Map<AggregatedUserDto, UserViewModel>(applicationUser);
            return result;
        }

        #endregion User Management

        [HttpGet]
        [Route("GetUserClaims")]
        public IList<UserClaimsViewModel> GetUserClaims(string userId)
        {
            var response = _accountService.GetUserClaims(userId);
            return Mapper.Map<IList<UserClaimRequest>, IList<UserClaimsViewModel>>(response);
        }

        [HttpPut]
        [Route("UpdateUserClaims")]
        public IActionResult UpdateUserClaims([FromBody] UpdateUserClaimsViewModel model)
        {
            try
            {
                var updateData = Mapper.Map<IList<UserClaimsViewModel>, IList<UserClaimRequest>>(model.Claims);
                _accountService.UpdateUserClaims(model.UserId, updateData);
                return new ObjectResult(new { StatusCode = 204, Content = $@"User Claims updated!" });
            }
            catch (System.Exception ex)
            {
                return new ObjectResult(new { StatusCode = 400, Content = $@"User Claims could not be updated!" });
            }
        }
    }
}

