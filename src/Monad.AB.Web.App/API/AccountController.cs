using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Linq;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System;
using Monad.AB.Common.StateManagement;
using System.Security.Principal;
using Monad.AB.Web.App.Policies;

namespace Monad.AB.Web.App.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private IAccountService _accountService;
        private ICacheProvider _cacheInstance;
        private readonly TokenAuthOptions _tokenOptions;
        public AccountController(IAccountService accountService, TokenAuthOptions tokenOptions, ICacheProvider cacheInstance)
        {
            _accountService = accountService;
            _cacheInstance = cacheInstance;
            _tokenOptions = tokenOptions;
        }
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
                  //  var token = await _accountService.GetLoginToken(model.UserName, model.Password);
                    DateTime? expires = DateTime.UtcNow.AddDays(1);
                    accountsWebApiModel.User.UserName = model.UserName;
                    accountsWebApiModel.Token = this.GetToken(model.UserName, expires);
                    accountsWebApiModel.Authenticated = true;

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

        [HttpGet]
        [AllowAnonymous]

        [Route("GetClaims")]
        public IList<ClaimViewModel> GetClaims()
        {
            return this.HttpContext.User.Claims.Select(x => new ClaimViewModel { ClaimType = x.Type, ClaimValue = x.Value }).ToList();
        }

        private string GetToken(string user, DateTime? expires)
        {
            // Shishir need to reconsider JwtSecurityTokenHandler from system.Idenetity . cosnider this as throw away code
            var handler = new JwtSecurityTokenHandler();
            var currentUser = _accountService.GetUser(user);
            var currentCacheKey = string.Format("UserClaims-{0}", user);
            _cacheInstance.Set(currentCacheKey, currentUser.Result.Claims.Select(x => new Claim(x.ClaimType, x.ClaimValue)).ToList());
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
    }
}
