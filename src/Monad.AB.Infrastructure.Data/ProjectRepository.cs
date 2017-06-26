using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class ProjectRepository:Repository<Project>, IProjectRepository
    {
        public ProjectRepository(ApplicationDBContext dataContext):base(dataContext)
        {
        }
    }
}
