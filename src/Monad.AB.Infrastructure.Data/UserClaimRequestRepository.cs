using System.Collections.Generic;
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace Monad.AB.Infrastructure.Data
{
    public class UserClaimRequestRepository : Repository<UserClaimRequest>, IUserClaimRequestRepository
    {
        private SecurityDBContext _dataContext;
        public UserClaimRequestRepository(SecurityDBContext dataContext) : base(dataContext)
        {
            _dataContext = dataContext;
        }
        public IList<UserClaimRequest> GetSearchResult(string userId = null)
        {
            object[] sqlParams = { new SqlParameter("@userId", string.IsNullOrWhiteSpace(userId) ? "" : userId) };
            var result = _dataContext.Set<UserClaimRequest>().FromSql("[GetUserClaimsForUser] @userId", sqlParams).ToListAsync().Result;
            return result;
        }
    }
}

