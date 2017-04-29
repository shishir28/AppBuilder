using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class FormRepository : Repository<Form>, IFormRepository
    {
        public FormRepository(CustomDBContext dataContext):base(dataContext)
        {
        }
    }
}


