using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class FormViewRepository : Repository<FormView>, IFormViewRepository
    {
        public FormViewRepository(ApplicationDBContext dataContext):base(dataContext)
        {
        }
    }
}


