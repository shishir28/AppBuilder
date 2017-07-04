using  Monad.AB.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using  Monad.AB.Domain.Entities;
using Monad.AB.Domain.Entities.Identity;

using Monad.AB.Domain.Interfaces;
using System.Threading.Tasks;
using Monad.AB.Domain.Entities.Dto;
using Microsoft.AspNetCore.Identity;
using Monad.AB.Domain.Interfaces.Identity;

namespace  Monad.AB.Services.Business
{
    public class RoleService : IRoleService
    {
        //Shishir Break it down into smaller services as it is viloating lot is  SR principle 
        // 
        private IRoleRightRepository _roleRightRepository;
        private IRoleRightRequestRepository _roleRightRequestRepository;
        private IActivityRepository _activityRepository;
        private IResourceRepository _resourceRepository;
        private ILookupTypeRepository _lookupTypeRepository;
        private ILookupValueRepository _lookupValueRepository;
        private IIdentityRepository _identityRepository;

        public RoleManager<Role> RoleManager { get; private set; }

        public RoleService(RoleManager<Role> roleMananager,
            IRoleRightRepository roleRightRepository,
            IRoleRightRequestRepository roleRightRequestRepository,
            IActivityRepository activityRepository,
            ILookupTypeRepository lookupTypeRepository,
            ILookupValueRepository lookupValueRepository,
            IResourceRepository resourceRepository,
            IIdentityRepository identityRepository)
        {
            RoleManager = roleMananager;
            _roleRightRepository = roleRightRepository;
            _roleRightRequestRepository = roleRightRequestRepository;
            _activityRepository = activityRepository;
            _lookupTypeRepository = lookupTypeRepository;
            _lookupValueRepository = lookupValueRepository;
            _resourceRepository = resourceRepository;
            _identityRepository = identityRepository;
        }

        public void AddRoleRight(RoleRight roleRight)
        {
            roleRight.LastModifiedDateUtc = DateTime.UtcNow;
            roleRight.CreatedDateUtc = DateTime.UtcNow;
            roleRight.LastModifiedBy = 1;
            _roleRightRepository.Create(roleRight);
        }

        public void DeleteRoleRight(RoleRight roleRight) => _roleRightRepository.Delete(roleRight);

        public void EditRoleRight(RoleRight roleRight)
        {
            roleRight.LastModifiedDateUtc = DateTime.UtcNow;
            roleRight.LastModifiedBy = 1;
            _roleRightRepository.Update(roleRight);
        }

        public RoleRight GetActivityById(int id) =>
            _roleRightRepository.GetAll().Where(x => x.Id == id).FirstOrDefault();

        public IList<RoleRight> GetAllRightByRoleId(string roleId) =>
            _roleRightRepository.GetAll().Where(x => x.RoleId == roleId).ToList();

        public IList<Role> GetAll() =>
             RoleManager.Roles.ToList();

        public async Task<Role> GetRoleById(string roleId) =>
             await RoleManager.FindByIdAsync(roleId);

        //actually it checks for normalized name
        public async Task<Role> GetRoleByName(string roleName) =>
             await RoleManager.FindByNameAsync(roleName);

        public IList<RoleRightRequest> GetRoleRights(string applicationRole)
        {
            return _roleRightRequestRepository.GetSearchResult(applicationRole);
        }

        public void UpdateRoleRights(string roleId, IList<RoleRightRequest> roleRightsDto)
        {
            _roleRightRequestRepository.UpdateRoleRights(roleId, roleRightsDto);
        }
    }
}