using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Monad.AB.Domain.Entities.Identity
{
    public class Role : IdentityRole
    {
        public string Description { get; set; }
        public bool IsActive { get; set; }
    }
}

