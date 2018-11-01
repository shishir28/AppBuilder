using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Monad.AB.Web.App.Models
{
    public class UserRoleViewModel : RoleViewModel
    {
        public bool IsSelected { get; set; }
    }
    public class RoleViewModel : AddRoleViewModel
    {
        public string RoleId { get; set; }
    }

    public class AddRoleViewModel
    {

        [Required]
        [NotMapped]
        [Display(Name = "Role Name")]
        public string Name { get; set; }

        [NotMapped]
        [Display(Name = "Role Normalized Name")]
        public string NormalizedName { get; set; }

        [Required]
        [NotMapped]
        [Display(Name = "Role Description")]
        public string Description { get; set; }
        
        public bool IsActive { get; set; }
    }

    public class RoleRightsViewModel
    {
        public int Id { get; set; }
        public string ResourceName { get; set; }
        public bool IsAdd { get; set; }
        public bool IsEdit { get; set; }
        public bool IsDelete { get; set; }
        public bool IsView { get; set; }
        public bool IsList { get; set; }
        public int AddId { get; set; }
        public int EditId { get; set; }
        public int DeleteId { get; set; }
        public int ViewId { get; set; }
        public int ListId { get; set; }
    }

    public class UpdateRoleRightsViewModel
    {
        public List<RoleRightsViewModel> RoleRights { get; set; }
        public string ApplicationRoleId { get; set; }
    }
}
