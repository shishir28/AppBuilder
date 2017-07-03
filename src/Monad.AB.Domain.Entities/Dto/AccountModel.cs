using System;
using System.Collections.Generic;

namespace Monad.AB.Domain.Entities.Dto
{
    public class ForgotPasswordOperationResult
    {
        public string UserName { get; set; }
        public string SecurityUserId { get; set; }
        public string Email { get; set; }
        public string SecurityCode { get; set; }
        public string ResetLink { get; set; }
        public bool Result { get; set; }
    }

    public class EnableUserOperationResult
    {
        public string UserName { get; set; }
        public string SecurityUserId { get; set; }
        public string Email { get; set; }
        public bool Enabled { get; set; }
        public bool Result { get; set; }
    }

    public class AggregatedUserDto
    {
        public string Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }

        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string Zip { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string UserText { get; set; }
        public string RoleId { get; set; }
        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
        public bool LockoutEnabled { get; set; }

        public int UserRole { get; set; }
        public string PrintName { get; set; }
        public bool IsEnabled { get; set; }

    }

    public class UserRoleDto
    {
        public bool IsSelected { get; set; }
        public string ApplicationRoleId { get; set; }
        public string Name { get; set; }
        public string NormalizedName { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }

    public class ResetPasswordResult
    {
        public string Email { get; set; }
        public string Code { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public bool Result { get; set; }
        public string Message { get; set; }
    }

    public class ChangePasswordResult
    {
        public string Email { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public bool Result { get; set; }
        public string Message { get; set; }
    }

    public class ManagerUserDto
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

}
