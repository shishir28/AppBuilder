using System;

namespace Monad.AB.Domain.Entities
{
    public class WebAppConfiguration : BaseEntity
    {
        public int ProjectID { get; set; }
        public string ServerName { get; set; }
        public string PortNumber { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }
}
