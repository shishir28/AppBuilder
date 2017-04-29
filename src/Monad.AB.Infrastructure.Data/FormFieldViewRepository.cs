using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Infrastructure.Data
{
    public class FormFieldViewRepository : Repository<FormFieldView>, IFormFieldViewRepository
    {
        public FormFieldViewRepository(CustomDBContext dataContext):base(dataContext)
        {
        }
    }
}


