using Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace Monad.AB.Domain.Interfaces
{
    public interface IUserClaimRequestRepository : IRepository<UserClaimRequest>
    {
        IList<UserClaimRequest> GetSearchResult(string userId = null);
        //void UpdateRoleRights(string roleId, IList<RoleRightRequest> updateRequest);
    }
}