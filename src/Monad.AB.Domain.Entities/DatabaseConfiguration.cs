using System;

namespace Monad.AB.Domain.Entities
{
    public class DatabaseConfiguration : BaseEntity
    {
        public int ProjectID { get; set; }
        public string ServerName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        //public string Path { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }
}
