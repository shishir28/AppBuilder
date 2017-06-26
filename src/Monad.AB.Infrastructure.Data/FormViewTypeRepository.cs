using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class FormViewTypeRepository : Repository<FormViewType>, IFormViewTypeRepository
    {
        public FormViewTypeRepository(ApplicationDBContext dataContext):base(dataContext)
        {
        }
    }
}


