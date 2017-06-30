using  Monad.AB.Domain.Entities;
using Monad.AB.Domain.Entities.Dto;
using Monad.AB.Domain.Entities.Identity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace  Monad.AB.Services.Interface
{
    public interface IRoleService : IService
    {
        IList<Role> GetAll();
        Task<Role> GetRoleById(string role);
        Task<Role> GetRoleByName(string roleName);
        IList<RoleRight> GetAllRightByRoleId(string roleId);
        void AddRoleRight(RoleRight roleRight);
        void EditRoleRight(RoleRight roleRight);
        void DeleteRoleRight(RoleRight roleRight);
        IList<RoleRightRequest> GetRoleRights(string applicationRole);
        void UpdateRoleRights(string roleId, IList<RoleRightRequest> roleRightsDto);
    }
}
