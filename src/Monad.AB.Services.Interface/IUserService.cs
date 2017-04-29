using Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace Monad.AB.Services.Interface
{
    public interface IUserService : IService
    {
        IList<ApplicationUser> GetUsers();
        ApplicationUser GetUserById(int userId);
        ApplicationUser GetUserByName(string userName);
        void AddUser(ApplicationUser user);
        void EditUser(ApplicationUser user);
        void DeleteUser(ApplicationUser user);
    }
}
