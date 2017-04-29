using System;

namespace Monad.AB.Domain.Entities
{
    public class FormView : BaseEntity
    {
        public int FormID { get; set; }
        public int FormViewTypeID { get; set; }
        public string ViewType { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }
}
