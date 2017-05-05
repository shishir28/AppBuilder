using System;
using System.ComponentModel.DataAnnotations;

namespace Monad.AB.Web.App.Models
{
    public class WebAppConfigurationViewModel
    {
        [Required]
        [Display(Name = "WebAppConfiguration Id")]
        public int Id { get; set; }
        public int ProjectID { get; set; }
        public string WebServerName { get; set; }
        public string PortNumber { get; set; }
        //public string WebUserName { get; set; }
        //public string WebPassword { get; set; }
        //public string WebPath { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }
}
