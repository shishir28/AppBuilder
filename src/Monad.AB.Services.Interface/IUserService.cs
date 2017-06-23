using Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace Monad.AB.Services.Interface
{
    public interface IUserProfileService : IService
    {
        IList<UserProfile> GetUsers();
        UserProfile GetUserById(int userId);
        UserProfile GetUserByName(string userName);
        void AddUser(UserProfile user);
        void EditUser(UserProfile user);
        void DeleteUser(UserProfile user);
    }
}
