using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class ActivityRepository : Repository<Activity>, IActivityRepository
    {
        public ActivityRepository(SecurityDBContext dataContext):base(dataContext)
        {

        }
    }
}


