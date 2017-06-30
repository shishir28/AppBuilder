using Monad.AB.Domain.Entities;
using System.Collections.Generic;
namespace Monad.AB.Domain.Interfaces
{
    public interface IRoleRightRequestRepository : IRepository<RoleRightRequest>
    {
      IList<RoleRightRequest> GetSearchResult(string roleName = null);
      void UpdateRoleRights(string roleId, IList<RoleRightRequest> updateRequest);
    }
}
