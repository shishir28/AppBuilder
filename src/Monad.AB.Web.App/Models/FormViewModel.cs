using System;
using System.ComponentModel.DataAnnotations;

namespace Monad.AB.Web.App.Models
{
    public class FormViewModel
    {
        [Required]
        [RegularExpression(@"^\S*$")]
        [Display(Name = "Form Id")]
        public int Id { get; set; }
        public int ProjectID { get; set; }
        public string FormName { get; set; }
        public string FormTitle { get; set; }
        public string FormDescription { get; set; }
        public int DependencyID { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }

    public class EditFormViewModel : FormViewModel
    {
    }
   
}
