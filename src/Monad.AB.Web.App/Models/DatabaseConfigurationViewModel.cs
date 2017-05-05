using System;
using System.ComponentModel.DataAnnotations;

namespace Monad.AB.Web.App.Models
{
    public class DatabaseConfigurationViewModel
    {
        [Required]
        [Display(Name = "DatabaseConfiguration Id")]
        public int Id { get; set; }
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
