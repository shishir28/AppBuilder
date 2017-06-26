using System;

namespace Monad.AB.Domain.Entities
{
    public class UserPasswordHistory : BaseEntity
    {
        public string UserId { get; set; }
        public string PasswordHash { get; set; }
        public DateTime CreatedDateUtc { get; set; }
    }
}
