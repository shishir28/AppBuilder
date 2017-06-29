using Monad.AB.Domain.Entities.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Monad.AB.Web.App.Models
{
    public class UserRoleViewModel : LookupTypeViewModel
    {
        public bool IsSelected { get; set; }
    }
    public class LookupTypeViewModel : AddRoleViewModel
    {
        public string ApplicationRoleId { get; set; }
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

        public int TenantId { get; set; }
        public bool IsActive { get; set; }
    }
    public class RoleRightsViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int ResourceTypeId { get; set; }
        public bool IsAllowed { get; set; }
        public bool IsCreate { get; set; }
        public bool IsEdit { get; set; }
        public bool IsView { get; set; }
        public bool IsList { get; set; }
        public bool IsDelete { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }

    public class UpdateRoleRightsView
    {
        public List<RoleRightsDto> RoleRights { get; set; }
        public string ApplicationRoleId { get; set; }
    }
}
