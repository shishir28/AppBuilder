using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class DatabaseConfigurationRepository : Repository<DatabaseConfiguration>, IDatabaseConfigurationRepository
    {
        public DatabaseConfigurationRepository(CustomDBContext dataContext):base(dataContext)
        {
        }
    }
}


