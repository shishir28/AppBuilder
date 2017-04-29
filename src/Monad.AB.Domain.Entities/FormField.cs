using System;
using System.Collections.Generic;

namespace Monad.AB.Domain.Entities
{
    public class FormField : BaseEntity
    {
        public int FormID { get; set; }
        public int FieldTypeID { get; set; }
        public string Name { get; set; }
        public string Label { get; set; }
        public string Description { get; set; }
        public int Width { get; set; }
        public int RowNumber { get; set; }
        public int RowSpan { get; set; }
        public int ColumnNumber { get; set; }
        public int ColumnSpan { get; set; }
        public int GroupControlID { get; set; }
        public string GroupName { get; set; }
        public bool IsRequired { get; set; }
        public bool IsIdentifier { get; set; }
        public bool IsForeignKey { get; set; }
        public int? ForeignFieldID { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
        public  FieldType FieldType { get; set; }
        public IList<FormFieldView> Views { get; set; }
    }
}
