using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class UserPasswordHistoryRepository : Repository<UserPasswordHistory>, IUserPasswordHistoryRepository
    {
        public UserPasswordHistoryRepository(SecurityDBContext dataContext):base(dataContext)
        {
        }
    }
}

