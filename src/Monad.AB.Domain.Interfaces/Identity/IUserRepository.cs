using Monad.AB.Domain.Entities.Identity;

namespace Monad.AB.Domain.Interfaces.Identity
{
    public interface IUserRepository : IRepository<User>
    {
        User GetByEmailId(string email);
    }
}