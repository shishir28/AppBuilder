using System;

namespace Monad.AB.Domain.Entities
{
    public class ProjectPublishStatus : BaseEntity
    {
        public int ProjectID { get; set; }
        public string Status { get; set; }
        public string Url { get; set; }
        public string DownloadLink { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }
}
