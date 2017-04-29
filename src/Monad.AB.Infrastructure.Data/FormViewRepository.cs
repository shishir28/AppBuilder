using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class FormViewRepository : Repository<FormView>, IFormViewRepository
    {
        public FormViewRepository(CustomDBContext dataContext):base(dataContext)
        {
        }
    }
}


