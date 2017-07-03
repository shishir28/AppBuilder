using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Monad.AB.Domain.Interfaces.Identity;
using Monad.AB.Domain.Interfaces;
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Entities.Identity;
using Monad.AB.Services.Interface;
using System.Security.Claims;
using Monad.AB.Common.Utility;
using Monad.AB.Domain.Entities.Dto;
using System;

namespace Monad.AB.Services.Business
{
    public class AccountService : IAccountService
    {
        private IUserProfileService _userService;
        private IIdentityRepository _store;
        private IActivityService _activityService;
        private IRoleRightRepository _roleRightRepository;
        private IActivityRepository _activityRepository;
        private IResourceRepository _resourceRepository;
        private IResourceTypeRepository _resourceTypeRepository;

        public AccountService(UserManager<User> userManager,
            RoleManager<Role> roleMananager,
            SignInManager<User> signInManager,
            IIdentityRepository store,
            IActivityService activityService,
            IUserProfileService userService,
            IRoleRightRepository roleRightRepository,
             IActivityRepository activityRepository,
             IResourceRepository resourceRepository,
             IResourceTypeRepository resourceTypeRepository)
        {
            UserManager = userManager;
            SignInManager = signInManager;
            RoleManager = roleMananager;
            _store = store;
            _activityService = activityService;
            _userService = userService;
            _roleRightRepository = roleRightRepository;
            _activityRepository = activityRepository;
            _resourceRepository = resourceRepository;
            _resourceTypeRepository = resourceTypeRepository;
        }

        public UserManager<User> UserManager { get; private set; }

        public SignInManager<User> SignInManager { get; private set; }

        public RoleManager<Role> RoleManager { get; private set; }

        public async Task<SignInResult> Login(string userName, string password, bool rememberMe)
        {
            return await SignInManager.PasswordSignInAsync(userName, password, rememberMe, lockoutOnFailure: false);
        }

        public async Task<string> GetLoginToken(string userName, string password)
        {
            //do nothing
            return await Task.FromResult<string>("");

        }

        public void LogOff(string userName)
        {
            SignInManager.SignOutAsync();
        }

        public async Task<IdentityResult> Register(string user, string password)
        {
            var targetUser = new User { UserName = user, Email = user };
            var createdUser = await UserManager.CreateAsync(targetUser, password);

            if (createdUser.Succeeded)
            {
                var code = await UserManager.GenerateEmailConfirmationTokenAsync(targetUser);
                _userService.AddUser(new UserProfile() { UserName = user });
                var newUser = UserManager.FindByNameAsync(user).Result;

                var userRoleResult = await UserManager.AddToRoleAsync(newUser, "Administrator");
                if (userRoleResult.Succeeded)
                {
                    var resourceTypes = _resourceTypeRepository.GetAll().ToList();
                    var formResourceTypeId = resourceTypes.Where(x => string.Equals(x.Name, "Form")).SingleOrDefault().Id;
                    var URLResourceTypeId = resourceTypes.Where(x => string.Equals(x.Name, "URL")).SingleOrDefault().Id;
                    var APIResourceTypeId = resourceTypes.Where(x => string.Equals(x.Name, "API")).SingleOrDefault().Id;
                    var resultRole = await RoleManager.FindByNameAsync("Administrator");
                    // DONT fire this code if you  dont want activity based security
                    var roleRights = _roleRightRepository.GetAll().Where(x => string.Equals(x.RoleId, resultRole.Id)).ToList();

                    var formElementsClaims = from r in _resourceRepository.GetAll().Where(x => x.ResourceTypeId == formResourceTypeId)
                                             join rr in roleRights on r.Id equals rr.ResourceId
                                             join a in _activityRepository.GetAll().Where(x => x.ResourceTypeId == formResourceTypeId) on rr.ActivityId equals a.Id
                                             select r.Name + "." + a.Value;

                    //// assign claims (activities)  for current role to this user
                    await UserManager.AddClaimsAsync(newUser, formElementsClaims.Select(x => new System.Security.Claims.Claim("Custom", x)));

                    var URLElementsClaims = from r in _resourceRepository.GetAll().Where(x => x.ResourceTypeId == URLResourceTypeId)
                                            join rr in roleRights on r.Id equals rr.ResourceId
                                            join a in _activityRepository.GetAll().Where(x => x.ResourceTypeId == URLResourceTypeId) on rr.ActivityId equals a.Id
                                            select "/" + a.Value.ToCamelCase() + r.Name;

                    await UserManager.AddClaimsAsync(newUser, URLElementsClaims.Select(x => new System.Security.Claims.Claim("Custom", x)));


                    var apiClaims = from r in _resourceRepository.GetAll().Where(x => x.ResourceTypeId == APIResourceTypeId)
                                    join rr in roleRights on r.Id equals rr.ResourceId
                                    join a in _activityRepository.GetAll().Where(x => x.ResourceTypeId == APIResourceTypeId) on rr.ActivityId equals a.Id
                                    select r.Name + "/" + a.Value;

                    await UserManager.AddClaimsAsync(newUser, apiClaims.Select(x => new System.Security.Claims.Claim("Custom", x)));
                }
            }
            return (createdUser);
        }

        public async Task<IList<Claim>> GetClaims(User user)
        {
            return await UserManager.GetClaimsAsync(user);
        }

        public async Task<User> GetUser(string userName)
        {
            var user = UserManager.FindByNameAsync(userName).Result;
            return await Task.FromResult<User>(user);
        }

        public async Task<IdentityResult> AddRole(Role role)
        {
            return await RoleManager.CreateAsync(role);
        }

        public async Task<IdentityResult> UpdateRole(Role role)
        {
            var tempRole = await RoleManager.FindByNameAsync(role.Name);
            if (tempRole == null)
                return IdentityResult.Failed(new IdentityError[] { new IdentityError { Code = "", Description = "Role Not Found!" } });

            tempRole.IsActive = role.IsActive;
            tempRole.Description = role.Description;
            return await RoleManager.UpdateAsync(tempRole);
        }

        #region User Management
        public IList<AggregatedUserDto> GetAllUsers()
        {
            var securuityUsers = UserManager.Users.ToList();
            var users = _userService.GetUsers();
            return BuildUserList(securuityUsers, users);
        }

        private IList<AggregatedUserDto> BuildUserList(IList<User> securuityUsers, IList<UserProfile> users, bool loadRoles = false)
        {
            var allRoles = RoleManager.Roles.ToList();
            var query = from securityUser in securuityUsers
                        join user in users on securityUser.UserName equals user.UserName
                        select new AggregatedUserDto
                        {
                            Id = securityUser.Id,

                            UserName = securityUser.UserName,
                            // FirstName = user.FirstName,
                            // LastName = user.LastName,
                            // FullName = user.FirstName + ' ' + user.LastName,
                            Email = securityUser.Email,
                            PhoneNumber = securityUser.PhoneNumber,

                            // CreatedDateUtc = user.CreatedDateUtc,
                            // LastModifiedDateUtc = user.LastModifiedDateUtc,
                            // LastModifiedBy = Convert.ToInt32(user.LastModifiedBy),
                            // TenantId = securityUser.TenantId,
                            // IsEnabled = securityUser.IsEnabled

                        };
            return query.ToList();
        }

        public async Task<IdentityResult> AddUser(User user, UserProfile userProfile, IList<string> newRoles)
        {
            // add user to security database
            var password = "Test123#";// PasswordGenerator.Generate();
            var currentTime = DateTime.UtcNow;
            user.CreatedDateUtc = currentTime;
            user.LastModifiedDateUtc = currentTime;
            user.LastPasswordChangedDateUtc = currentTime;

            var createdUser = await UserManager.CreateAsync(user, password);
            if (createdUser.Succeeded)
            {
                var newUser = await UserManager.FindByNameAsync(user.UserName);
                // foreach (var roleId in newRoles)
                // {
                //     var applicationRole = await RoleManager.FindByIdAsync(roleId);
                //     var userRoleResult = await UserManager.AddToRoleAsync(user, applicationRole.Name);
                //     await AddClaims(newUser, applicationRole);
                // }
                // add user to application database
                userProfile.EmailAddress = user.Email;
                userProfile.UserName = user.UserName;
                userProfile.CreatedDateUtc = currentTime;
                userProfile.LastModifiedDateUtc = currentTime;

                if (string.IsNullOrWhiteSpace(userProfile.Gender)) // shishir assigning null if empty string was passed. Actually Geder should be lookup not string in database. will fix in near future
                    userProfile.Gender = null;
                _userService.AddUser(userProfile);
            }
            return createdUser;
        }

        private async Task<IdentityResult> AddClaims(User newUser, Role role)
        {
            var resourceTypes = _resourceTypeRepository.GetAll().ToList();
            var formResourceTypeId = resourceTypes.Where(x => string.Equals(x.Name, "Form")).SingleOrDefault().Id;
            var roleRights = _roleRightRepository.GetAll().Where(x => string.Equals(x.RoleId, role.Id)).ToList();
            var formElementsClaims = from r in _resourceRepository.GetAll().Where(x => x.ResourceTypeId == formResourceTypeId)
                                     join rr in roleRights on r.Id equals rr.ResourceId
                                     join a in _activityRepository.GetAll().Where(x => x.ResourceTypeId == formResourceTypeId) on rr.ActivityId equals a.Id
                                     select r.Name + "." + a.Value;

            return await UserManager.AddClaimsAsync(newUser, formElementsClaims.Select(x => new Claim("Custom", x)).ToList());
        }

        public async Task<string> GetUserId(User user)
        {
            return await UserManager.GetUserIdAsync(user);
        }

        public async Task<User> GetUserById(string userId)
        {
            return await UserManager.FindByIdAsync(userId);
        }

        public async Task<string> GenerateEmailConfirmationToken(User user)
        {
            return await UserManager.GenerateEmailConfirmationTokenAsync(user);
        }
        #endregion User Management

    }

}