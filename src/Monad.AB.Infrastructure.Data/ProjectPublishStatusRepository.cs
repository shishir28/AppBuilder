using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class ProjectPublishStatusRepository : Repository<ProjectPublishStatus>, IProjectPublishStatusRepository
    {
        public ProjectPublishStatusRepository(CustomDBContext dataContext):base(dataContext)
        {
        }
    }
}
