using Microsoft.EntityFrameworkCore;
using Microsoft.SqlServer.Server;
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;

namespace Monad.AB.Infrastructure.Data
{
    public class UserClaimRecord : BaseEntity
    {
        public string UserId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
    }

    public class UserClaimCollection : List<UserClaimRecord>, IEnumerable<SqlDataRecord>
    {
        IEnumerator<SqlDataRecord> IEnumerable<SqlDataRecord>.GetEnumerator()
        {
            var sqlRow = new SqlDataRecord(
                  new SqlMetaData("UserId", SqlDbType.NVarChar, 128),
                  new SqlMetaData("ClaimType", SqlDbType.NVarChar, -1),
                  new SqlMetaData("ClaimValue", SqlDbType.NVarChar, -1)
                 );
            foreach (var record in this)
            {
                sqlRow.SetString(0, record.UserId);
                sqlRow.SetString(1, record.ClaimType);
                sqlRow.SetString(2, record.ClaimValue);
                yield return sqlRow;
            }
        }
    }

    public class UserClaimRequestRepository : Repository<UserClaimRequest>, IUserClaimRequestRepository
    {
        private SecurityDBContext _dataContext;
        private IDictionary<string, string> _actionMappingDictionary;
        public UserClaimRequestRepository(SecurityDBContext dataContext) : base(dataContext)
        {
            _dataContext = dataContext;
            _actionMappingDictionary = new Dictionary<string, string> { { "add", "Add" },
            { "delete", "Delete" },
            { "edit", "Edit" },
            { "list", "List" },
            { "view", "View" }};
        }
        public IList<UserClaimRequest> GetSearchResult(string userId = null)
        {
            object[] sqlParams = { new SqlParameter("@userId", string.IsNullOrWhiteSpace(userId) ? "" : userId) };
            var result = _dataContext.Set<UserClaimRequest>().FromSql("[GetUserClaimsForUser] @userId", sqlParams).ToListAsync().Result;
            return result;
        }

        public void UpdateUserClaims(string userId, IList<UserClaimRequest> updateRequest)
        {
            var rowCollection = new UserClaimCollection();
            foreach (var updateData in updateRequest)
            {
                if (updateData.IsAdd == 1)
                    AddUserClaimRecord(userId, updateData.ResourceName, "add", rowCollection);

                if (updateData.IsDelete == 1)
                    AddUserClaimRecord(userId, updateData.ResourceName, "delete", rowCollection);

                if (updateData.IsEdit == 1)
                    AddUserClaimRecord(userId, updateData.ResourceName, "edit", rowCollection);

                if (updateData.IsList == 1)
                    AddUserClaimRecord(userId, updateData.ResourceName, "list", rowCollection);

                if (updateData.IsView == 1)
                    AddUserClaimRecord(userId, updateData.ResourceName, "view", rowCollection);

            }
            var dataParameter = new SqlParameter("@userClaimArray", rowCollection);
            dataParameter.Direction = ParameterDirection.Input;
            dataParameter.TypeName = "UserClaimDTOArray";
            dataParameter.SqlDbType = SqlDbType.Structured;
            object[] sqlParams = { new SqlParameter("@userId", string.IsNullOrWhiteSpace(userId) ? "" : userId),
                dataParameter
            };
            _dataContext.Database.ExecuteSqlCommand("[UpdateUserClaimsForUser] @userId,@userClaimArray", sqlParams);
        }

        private void AddUserClaimRecord(string userId, string resourceName, string actionName, UserClaimCollection rowCollection)
        {
            rowCollection.Add(new UserClaimRecord
            {
                UserId = userId,
                ClaimType = "Custom",
                ClaimValue = $"/{actionName}{resourceName}"
            });

            if (actionName != "list")
            {
                var substituteAction = (actionName == "view") ? actionName : "get";
                rowCollection.Add(new UserClaimRecord
                {
                    UserId = userId,
                    ClaimType = "Custom",
                    ClaimValue = $"{resourceName}/{substituteAction}"
                });
            }

            rowCollection.Add(new UserClaimRecord
            {
                UserId = userId,
                ClaimType = "Custom",
                ClaimValue = $"{resourceName}.{_actionMappingDictionary[actionName]}"
            });
        }
    }
}

