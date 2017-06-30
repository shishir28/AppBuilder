using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System;
using Microsoft.SqlServer.Server;

namespace Monad.AB.Infrastructure.Data
{
    public class RoleRightRecord : BaseEntity
    {
        public string ApplicationRoleId { get; set; }
        public int ApplicationResourceId { get; set; }

        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
        public int ActivityId { get; set; }
    }

    public class RoleRightCollection : List<RoleRightRecord>, IEnumerable<SqlDataRecord>
    {
        IEnumerator<SqlDataRecord> IEnumerable<SqlDataRecord>.GetEnumerator()
        {
            var sqlRow = new SqlDataRecord(
                  new SqlMetaData("ApplicationRoleId", SqlDbType.NVarChar, 128),
                   new SqlMetaData("ActivityId", SqlDbType.Int),
                  new SqlMetaData("ApplicationResourceId", SqlDbType.Int),
                  new SqlMetaData("CreatedDateUtc", SqlDbType.DateTime),
                  new SqlMetaData("LastModifiedDateUtc", SqlDbType.DateTime),
                  new SqlMetaData("LastModifiedBy", SqlDbType.Int)
                 );
            foreach (var record in this)
            {
                sqlRow.SetString(0, record.ApplicationRoleId);
                sqlRow.SetInt32(1, record.ActivityId);
                sqlRow.SetInt32(2, record.ApplicationResourceId);
                sqlRow.SetDateTime(3, record.CreatedDateUtc);
                sqlRow.SetDateTime(4, record.LastModifiedDateUtc);
                sqlRow.SetInt32(5, record.LastModifiedBy);
                yield return sqlRow;
            }
        }
    }

    public class RoleRightRequestRepository : Repository<RoleRightRequest>, IRoleRightRequestRepository
    {
        private SecurityDBContext _dataContext;
        public RoleRightRequestRepository(SecurityDBContext dataContext) : base(dataContext)
        {
            _dataContext = dataContext;
        }

        public IList<RoleRightRequest> GetSearchResult(string roleName = null)
        {
            object[] sqlParams = { new SqlParameter("roleName", string.IsNullOrWhiteSpace(roleName) ? "" : roleName) };
            var result = _dataContext.Set<RoleRightRequest>().FromSql("[GetRoleRightsForRole] @roleName", sqlParams).ToListAsync().Result;
            return result;
        }

        public void UpdateRoleRights(string roleId, IList<RoleRightRequest> updateRequest)
        {
            var rowCollection = new RoleRightCollection();
            var currentUtcTime = DateTime.UtcNow;
            foreach (var updateData in updateRequest)
            {
                if (updateData.IsAdd == 1)
                    rowCollection.Add(new RoleRightRecord
                    {
                        ApplicationRoleId = roleId,
                        ApplicationResourceId = updateData.Id,
                        CreatedDateUtc = currentUtcTime,
                        LastModifiedDateUtc = currentUtcTime,
                        LastModifiedBy = 1,
                        ActivityId = updateData.AddId
                    });

                if (updateData.IsDelete == 1)
                    rowCollection.Add(new RoleRightRecord
                    {
                        ApplicationRoleId = roleId,
                        ApplicationResourceId = updateData.Id,
                        CreatedDateUtc = currentUtcTime,
                        LastModifiedDateUtc = currentUtcTime,
                        LastModifiedBy = 1,
                        ActivityId = updateData.DeleteId
                    });


                if (updateData.IsEdit == 1)
                    rowCollection.Add(new RoleRightRecord
                    {
                        ApplicationRoleId = roleId,
                        ApplicationResourceId = updateData.Id,
                        CreatedDateUtc = currentUtcTime,
                        LastModifiedDateUtc = currentUtcTime,
                        LastModifiedBy = 1,
                        ActivityId = updateData.EditId
                    });

                if (updateData.IsList == 1)
                    rowCollection.Add(new RoleRightRecord
                    {
                        ApplicationRoleId = roleId,
                        ApplicationResourceId = updateData.Id,
                        CreatedDateUtc = currentUtcTime,
                        LastModifiedDateUtc = currentUtcTime,
                        LastModifiedBy = 1,
                        ActivityId = updateData.ListId
                    });

                if (updateData.IsView == 1)
                    rowCollection.Add(new RoleRightRecord
                    {
                        ApplicationRoleId = roleId,
                        ApplicationResourceId = updateData.Id,
                        CreatedDateUtc = currentUtcTime,
                        LastModifiedDateUtc = currentUtcTime,
                        LastModifiedBy = 1,
                        ActivityId = updateData.ViewId
                    });
            }
            var dataParameter = new SqlParameter("@roleRightArray", rowCollection);
            dataParameter.Direction = ParameterDirection.Input;
            dataParameter.TypeName = "RoleRightDTOArray";
            dataParameter.SqlDbType = SqlDbType.Structured;
            object[] sqlParams = { new SqlParameter("@roleId", string.IsNullOrWhiteSpace(roleId) ? "" : roleId),
                dataParameter
            };
            _dataContext.Database.ExecuteSqlCommand("[UpdateRoleRightsForRole] @roleId,@roleRightArray", sqlParams);

        }

       

    }
}
