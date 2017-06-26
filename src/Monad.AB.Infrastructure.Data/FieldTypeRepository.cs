using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class FieldTypeRepository : Repository<FieldType>, IFieldTypeRepository
    {
        public FieldTypeRepository(ApplicationDBContext dataContext):base(dataContext)
        {
        }
    }
}


