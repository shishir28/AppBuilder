using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Monad.AB.Web.App.Models
{
    public class ProjectViewModel
    {
        [Required]
        [RegularExpression(@"^\S*$")]
        [Display(Name = "Project name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Project Title")]
        public string Title { get; set; }

        [Display(Name = "Description")]
        public string Description { get; set; }

        [Display(Name = "RootNamespace")]
        public string RootNamespace { get; set; }

        [Display(Name = "CompanyName")]
        public string CompanyName { get; set; }
        
        [Required]
        [Display(Name = "User name")]
        public string UserName { get; set; }

        [Display(Name = "User name")]
        public List<FormViewModel> FormList { get; set; }
    }

    public class ProjecEditModel: ProjectViewModel
    {
        [Required]
        [Display(Name = "Project Id")]
        public int Id { get; set; }
        public bool AllowDownload { get; set; }
        public bool AllowPublish { get; set; }
    }

    public class ProjectBuildModel
    {
        [Required]
        [Display(Name = "Project Id")]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string RootNamespace { get; set; }
        public string CompanyName { get; set; }
        public bool AllowDownload { get; set; }
        public bool AllowPublish { get; set; }
        public DatabaseConfigurationModel DatabaseConfiguration { get; set; }
        public WebAppConfigurationModel WebServerConfiguration { get; set; }
    }

    public class DatabaseConfigurationModel
    {
        public int ProjectID { get; set; }
        public string ServerName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Path { get; set; }
    }

    public class WebAppConfigurationModel
    {
        public int ProjectID { get; set; }
        public string ServerName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Path { get; set; }
    }
}
