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
        private IRoleRightRepository _roleRightRepository;
        private IActivityRepository _activityRepository;
        private IResourceRepository _resourceRepository;
        private ILookupTypeRepository _lookupTypeRepository;
        private ILookupValueRepository _lookupValueRepository;
        private IIdentityRepository _identityRepository;
        public RoleManager<Role> RoleManager { get; private set; }

        public RoleService(RoleManager<Role> roleMananager,
            IRoleRightRepository roleRightRepository,
            IActivityRepository activityRepository,
            ILookupTypeRepository lookupTypeRepository,
            ILookupValueRepository lookupValueRepository,
            IResourceRepository resourceRepository,
            IIdentityRepository identityRepository)
        {
            RoleManager = roleMananager;
            _roleRightRepository = roleRightRepository;
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

        public IList<RoleRightsDto> GetRoleRights(string applicationRole)
        {
            var resources = new List<RoleRightsDto>();
            var activities = _activityRepository.GetAll().ToList();

            var resourceGroup = (from resource in _resourceRepository.GetAll()
                                 join roleRight in _roleRightRepository.GetAll() on resource.Id equals roleRight.ResourceId into tempRoleRight
                                 from roleRight in tempRoleRight.DefaultIfEmpty()
                                 where resource.ResourceTypeId == 1
                                 select new
                                 {
                                     Name = resource.Name,
                                     Desc = resource.Description,
                                     ResourceId = resource.Id,
                                     RoleRight = roleRight
                                 }).ToList().GroupBy(d => new { ResourceId = d.ResourceId, ResourceName = d.Name, ResourceDesc = d.Desc }).ToList();

            foreach (var resource in resourceGroup)
            {
                var activityIds = resource.Where(d => d.RoleRight != null && d.RoleRight.RoleId == applicationRole).Select(d => d.RoleRight.ActivityId).ToList();
                var roleRightsDto = new RoleRightsDto
                {
                    Id = resource.Key.ResourceId.ToString(),
                    Name = resource.Key.ResourceName,
                    Description = resource.Key.ResourceDesc,
                    IsCreate = activities.Any(d => d.Value == "Add" && activityIds.Contains(d.Id)),
                    IsEdit = activities.Any(d => d.Value == "Edit" && activityIds.Contains(d.Id)),
                    IsView = activities.Any(d => d.Value == "View" && activityIds.Contains(d.Id)),
                    IsList = activities.Any(d => d.Value == "List" && activityIds.Contains(d.Id)),
                    IsDelete = activities.Any(d => d.Value == "Delete" && activityIds.Contains(d.Id)),
                };
                resources.Add(roleRightsDto);
            }
            return resources;
        }

        public void UpdateRoleRights(List<RoleRightsDto> roleRightsDto, string roleId)
        {
            var activities = _activityRepository.GetAll().ToList();
            var rolerightstodelete = _roleRightRepository.GetAll().Where(d => d.RoleId == roleId);

            //foreach (var item in rolerightstodelete)
            //    _roleRightRepository.DeleteWithoutCommit(item);

            //if (rolerightstodelete.Any())
            //    _roleRightRepository.SaveChanges();

            foreach (var roleRightDto in roleRightsDto)
            {
                var value = roleRightDto.IsCreate ? "Add"
                    : roleRightDto.IsEdit ? "Edit"
                    : roleRightDto.IsView ? "View"
                    : roleRightDto.IsList ? "List"
                    : roleRightDto.IsDelete ? "Delete" : "";
                if (value == "") continue;
                foreach (var activity in activities.Where(d => d.Value == value))
                {
                    var roleRight = new RoleRight
                    {
                        ResourceId = Convert.ToInt32(roleRightDto.Id),
                        ActivityId = activity.Id,
                        RoleId = roleId,
                        CreatedDateUtc = DateTime.UtcNow,
                        LastModifiedBy = 1,
                        LastModifiedDateUtc = DateTime.UtcNow
                    };
                  //  _roleRightRepository.CreateWithoutCommit(roleRight);
                }
            }
          //  _roleRightRepository.SaveChanges();
        }

    }
}