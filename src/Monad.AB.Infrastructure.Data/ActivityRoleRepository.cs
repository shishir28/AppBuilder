using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class ActivityRoleRepository : Repository<ActivityRole>, IActivityRoleRepository
    {
        public ActivityRoleRepository(SecurityDBContext dataContext):base(dataContext)
        {

        }
    }
}


