using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class WebAppConfigurationRepository : Repository<WebAppConfiguration>, IWebAppConfigurationRepository
    {
        public WebAppConfigurationRepository(ApplicationDBContext dataContext):base(dataContext)
        {
        }
    }
}


