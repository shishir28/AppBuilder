using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;
using System.Linq;

namespace Monad.AB.Infrastructure.Data
{
    public class LookupTypeRepository : Repository<LookupType>, ILookupTypeRepository
    {
        public LookupTypeRepository(ApplicationDBContext dataContext) : base(dataContext)
        {
        }

        public LookupType GetByName(string name)
        {
            return DbSet.FirstOrDefault(x => string.Equals(x.Name, name));
        }
    }
}


