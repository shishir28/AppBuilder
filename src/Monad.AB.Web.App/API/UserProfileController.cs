using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Monad.AB.Domain.Entities;

namespace Monad.AB.Web.App.Controllers
{
    //   [Authorize(Policy = "Bearer")]
    [Route("api/[controller]")]
    public class UserProfileController : Controller
    {
        private IUserProfileService _userService;
        public UserProfileController(IUserProfileService userService)//, IOptions<AppSettings> appSettings)
        {
            _userService = userService;
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

        [HttpPut]
        [AllowAnonymous]
        [Route("EditUserProfile")]
        public IActionResult EditUserProfile([FromBody]ApplicationUserViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = new UserProfile
                    {
                        Id = model.Id,
                        UserName = model.UserName,
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        EmailAddress = model.EmailAddress,
                        Designation = model.Designation,
                        AddressLine1 = model.AddressLine1,
                        AddressLine2 = model.AddressLine2,
                        Zip = model.Zip,
                        City = model.City,
                        State = model.State,
                        ProfilePicture = model.ProfilePicture
                    };
                    _userService.EditUser(user);
                    return new ObjectResult(new { StatusCode = 204, Content = $@"User {model.UserName} Saved!" });
                }
                catch (System.Exception ex)
                {
                    return new ObjectResult(new { StatusCode = 400, Content = $@"User {model.UserName} could not be Saved! " });
                }
            }
            return new StatusCodeResult(412);
        }
    }
}
