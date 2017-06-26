using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class UserProfileRepository : Repository<UserProfile>, IUserProfileRepository
    {
        public UserProfileRepository(ApplicationDBContext dataContext) : base(dataContext)
        {
        }
    }
}


