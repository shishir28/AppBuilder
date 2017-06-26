using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class FormFieldRepository : Repository<FormField>, IFormFieldRepository
    {
        public FormFieldRepository(ApplicationDBContext dataContext):base(dataContext)
        {
         //   base.DbSet.Include(c => c.FieldType);
        }
    }
}


