using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Linq;
using System.Net;

namespace Monad.AB.Web.App.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private IUserService _userService;
        // private IOptions<AppSettings> _appSettings;
        public UserController(IUserService userService)//, IOptions<AppSettings> appSettings)
        {
            _userService = userService;
            //_appSettings = appSettings;
        }

        [HttpGet]
        [Route("GetUserDetails")]
        public ApplicationUserViewModel GetUserDetails(string userName)
        {
            var applicationUser = _userService.GetUserByName(userName);
            if (applicationUser != null && applicationUser.ProfilePicture == null)
            {
                string defaultprofilePicture = "DefaultProfilePicture.png";
                applicationUser.ProfilePicture = defaultprofilePicture;
            }

            return new ApplicationUserViewModel
            {
                Id = applicationUser.Id,
                UserName = applicationUser.UserName,
                FirstName = applicationUser.FirstName,
                LastName = applicationUser.LastName,
                EmailAddress = applicationUser.EmailAddress,
                Designation = applicationUser.Designation,
                AddressLine1 = applicationUser.AddressLine1,
                AddressLine2 = applicationUser.AddressLine2,
                Zip = applicationUser.Zip,
                City = applicationUser.City,
                State = applicationUser.State,
                ProfilePicture = applicationUser.ProfilePicture
            };
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("EditUserProfile")]
        public IActionResult EditUserProfile([FromBody]ApplicationUserViewModel model)
        {
            if (ModelState.IsValid)
            {
                //var user = new ApplicationUser
                //{
                //    Id = model.Id,
                //    UserName = model.UserName,
                //    FirstName = model.FirstName,
                //    LastName = model.LastName,
                //    EmailAddress = model.EmailAddress,
                //    Designation = model.Designation,
                //    AddressLine1 = model.AddressLine1,
                //    AddressLine2 = model.AddressLine2,
                //    Zip = model.Zip,
                //    City = model.City,
                //    State = model.State,
                //    ProfilePicture = model.ProfilePicture
                //};
                //_userService.EditUser(user);
            }
            return new StatusCodeResult(200);
        }


    }
}
