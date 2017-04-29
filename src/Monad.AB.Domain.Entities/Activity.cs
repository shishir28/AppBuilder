using System;

namespace Monad.AB.Domain.Entities
{
    public class Activity : BaseEntity
    {
        public string Description { get; set; }
        public string Value { get; set; }
        public int ResourceTypeId { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }
}


