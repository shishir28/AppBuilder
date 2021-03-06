﻿using System.ComponentModel.DataAnnotations;
using System;

namespace Monad.AB.Web.App.Models
{
    public class FormViewModel
    {
        
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
        [Required]
        [RegularExpression(@"^\S*$")]
        [Display(Name = "Form Id")]
        public int Id { get; set; }
    }
   
}
