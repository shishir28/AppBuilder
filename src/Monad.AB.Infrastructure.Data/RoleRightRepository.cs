using  Monad.AB.Domain.Entities;
using  Monad.AB.Domain.Interfaces;

namespace  Monad.AB.Infrastructure.Data
{
    public class RoleRightRepository : Repository<RoleRight>, IRoleRightRepository
    {
        public RoleRightRepository(SecurityDBContext dataContext) : base(dataContext)
        {
        }
    }
}
