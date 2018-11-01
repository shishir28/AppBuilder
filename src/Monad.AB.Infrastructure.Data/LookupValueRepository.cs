using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;
using System.Linq;

namespace Monad.AB.Infrastructure.Data
{
    public class LookupValueRepository : Repository<LookupValue>, ILookupValueRepository
    {
        public LookupValueRepository(ApplicationDBContext dataContext) : base(dataContext)
        {
        }
        public LookupValue GetByName(string name)
        {
            return DbSet.FirstOrDefault(x => string.Equals(x.Name, name));
        }

       
    }
}

