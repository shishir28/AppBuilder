using  Monad.AB.Domain.Entities;
using  Monad.AB.Domain.Interfaces;

namespace  Monad.AB.Infrastructure.Data
{
    public class ResourceTypeRepository : Repository<ResourceType>, IResourceTypeRepository
    {
        public ResourceTypeRepository(CustomDBContext dataContext) : base(dataContext)
        {
        }
    }
}
