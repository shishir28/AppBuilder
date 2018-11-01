using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;

namespace Monad.AB.Web.App.Models
{

    public class ManagerViewModel
    {
        public string UserName { get; set; }
        public string SecurityUserId { get; set; }
        public string Email { get; set; }
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public int? ManagerId { get; set; }
    }

    public class UserEditViewModel : UserViewModel
    {
    }

    public class UserViewModel : CommonUserViewModel
    {
        public int UserId { get; set; }
        public string Id { get; set; }
        public string FullName { get; set; }

    }

    public class CommonUserViewModel
    {
        [Required]
        [NotMapped]
        [Display(Name = "User Name")]
        public string UserName { get; set; }

        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Email Address")]
        [EmailAddress]
        public string Email { get; set; }

        [NotMapped]
        [DataType(DataType.PhoneNumber)]
        [Display(Name = "Phone Number")]
        public string PhoneNumber { get; set; }

        [Required]
        [Display(Name = "Address Line-1")]
        public string AddressLine1 { get; set; }

        [Display(Name = "Address Line-2")]
        public string AddressLine2 { get; set; }

        [Display(Name = "ZIP Code")]
        public string Zip { get; set; }

        [Display(Name = "City Name")]
        public string City { get; set; }

        [Display(Name = "State Name")]
        public string State { get; set; }       
   
        public string UserText { get; set; }

        [Required]
        [Display(Name = "Select Role")]
        public string  RoleId { get; set; }
        public DateTime CreatedDateUtc { get; set; }

        public DateTime LastModifiedDateUtc { get; set; }

        public int LastModifiedBy { get; set; }

        [Required]
        public bool IsEnabled { get; set; }
        public string PrintName { get; set; }
        public string Gender { get; set; }
    }
    public class AddUserViewModel : CommonUserViewModel
    {

    }

    public class AddUserResultViewmodel
    {
        public int StatusCode { get; set; }
        public string EmailConfirmationToken { get; set; }
        public string SecurityUserId { get; set; }
    }


    public class UserClaimsViewModel
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

    public class UpdateUserClaimsViewModel
    {
        public List<UserClaimsViewModel> Claims { get; set; }
        public string UserId { get; set; }
    }
}
