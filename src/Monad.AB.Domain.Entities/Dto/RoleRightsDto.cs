using System;

namespace Monad.AB.Domain.Entities.Dto
{
    public class RoleRightsDto 
    {
        public string Id { get; set; } //ApplicationResourceId
        public string Name { get; set; }
        public string Description { get; set; }
        public int ResourceTypeId { get; set; }
        public bool IsCreate { get; set; }
        public bool IsEdit { get; set; }
        public bool IsView { get; set; }
        public bool IsList { get; set; }

        public bool IsDelete { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }
}
