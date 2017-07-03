using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System;

namespace Monad.AB.Domain.Entities.Identity
{
    public class User : IdentityUser 
    { 
        public bool IsEnabled { get; set; }
        public DateTime LastPasswordChangedDateUtc { get; set; }
        public DateTime? LastLoginDate { get; set; }
        public DateTime? LastActivityDate { get; set; }

        public DateTime CreatedDateUtc { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }

    }
    
}
