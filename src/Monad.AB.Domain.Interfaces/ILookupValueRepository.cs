using Monad.AB.Domain.Entities;

namespace Monad.AB.Domain.Interfaces
{
    public interface ILookupValueRepository : IRepository<LookupValue>
    {
        LookupValue GetByName(string name);
    }
}
