using System;
using System.ComponentModel.DataAnnotations;

namespace Monad.AB.Web.App.Models
{

    public class FormViewTypeModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class FormFieldViewViewModel
    {
        public int Id { get; set; }
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
        public FormViewTypeModel View { get; set; }
    }

    public class FormFieldViewModel
    {
        
        public int FormID { get; set; }
        public int FieldTypeID { get; set; }
        [RegularExpression(@"^\S*$")]
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
    }

    public class EditFormFieldsViewModel : FormFieldViewModel
    {
        [Required]
        [Display(Name = "Form Id")]
        public int Id { get; set; }
    }

    public class DeleteFormFieldsViewModel : FormFieldViewModel
    {

    }

    public class EditFormFieldsViewViewModel : FormFieldViewModel
    {
        public bool ReadOnly { get; set; }
        public bool Hidden { get; set; }
        public int ViewName { get; set; }
        public int Row { get; set; }
        public int Column { get; set; }
        public int ViewID { get; set; }
        public int FieldID { get; set; }
        public int FormFieldViewID { get; set; }
    }
}
