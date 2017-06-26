using  Monad.AB.Domain.Entities;
using  Monad.AB.Domain.Interfaces;

namespace  Monad.AB.Infrastructure.Data
{
    public class ResourceRepository : Repository<Resource>, IResourceRepository
    {
        public ResourceRepository(SecurityDBContext dataContext) : base(dataContext)
        {
        }
    }
}
