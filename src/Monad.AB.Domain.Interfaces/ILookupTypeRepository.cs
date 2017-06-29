using Monad.AB.Domain.Entities;

namespace Monad.AB.Domain.Interfaces
{
    public interface ILookupTypeRepository : IRepository<LookupType>
    {
        LookupType GetByName(string name);
    }
}
