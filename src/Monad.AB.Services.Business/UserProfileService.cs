using Monad.AB.Services.Interface;
using System.Collections.Generic;
using System.Linq;
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;


namespace Monad.AB.Services.Business
{
    public class UserProfileService : IUserProfileService
    {
        private IUserProfileRepository _applicationUserRepository;
        public UserProfileService(IUserProfileRepository applicationUserRepository)
        {
            _applicationUserRepository = applicationUserRepository;
        }

        public void AddUser(UserProfile user)
        {
            _applicationUserRepository.Create(user);
        }

        public void DeleteUser(UserProfile user)
        {
            _applicationUserRepository.Delete(user);
        }

        public void EditUser(UserProfile user)
        {
            _applicationUserRepository.Update(user);
        }

        public UserProfile GetUserById(int userId)
        {
            return _applicationUserRepository.GetById(userId);
        }

        public UserProfile GetUserByName(string userName)
        {
            return _applicationUserRepository.GetAll().Where(x => x.UserName == userName).FirstOrDefault();
        }

        public IList<UserProfile> GetUsers()
        {
           return  _applicationUserRepository.GetAll().ToList();
        }
    }
}
