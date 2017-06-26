
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class ControlTypeRepository : Repository<ControlType>, IControlTypeRepository
    {
        public ControlTypeRepository(ApplicationDBContext dataContext):base(dataContext)
        {
        }
    }
}
