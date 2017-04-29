using System;
using System.Collections.Generic;

namespace Monad.AB.Domain.Entities
{
    public class Project : BaseEntity
    {
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string RootNamespace { get; set; }
        public string CompanyName { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
        public IList<Form> Forms { get; set; }
        public bool AllowDownload { get; set; }
        public bool AllowPublish { get; set; }
        public DatabaseConfiguration DatabaseConfiguration { get; set; }
        public WebAppConfiguration WebServerConfiguration { get; set; }
    }
}
