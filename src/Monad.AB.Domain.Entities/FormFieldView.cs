using System;

namespace Monad.AB.Domain.Entities
{
    public class FormFieldView : BaseEntity
    {
        public int FormFieldId { get; set; }
        public int ViewID { get; set; }
        public int FieldID { get; set; }
        public int Row { get; set; }
        public int RowSpan { get; set; }
        public int Column { get; set; }
        public int ColumnSpan { get; set; }
        public bool ReadOnly { get; set; }
        public bool Hidden { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
        public FormViewType View { get; set; }
    }
}
