using System;
using System.Collections.Generic;

namespace Monad.AB.Domain.Entities
{
    public class Form : BaseEntity
    {
        public int ProjectID { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int DependencyID { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
        public IList<FormField> Fields { get; set; }
    }
}
