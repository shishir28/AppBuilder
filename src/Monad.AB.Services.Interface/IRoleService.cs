using  Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace  Monad.AB.Services.Interface
{
    public interface IRoleService : IService
    {
        IList<RoleRight> GetAllRightByRoleId(string roleId);

        void AddRoleRight(RoleRight roleRight);
        void EditRoleRight(RoleRight roleRight);
        void DeleteRoleRight(RoleRight roleRight);
    }
}
