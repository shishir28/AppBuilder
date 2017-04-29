using Monad.AB.Services.Interface;
using System.Collections.Generic;
using System.Linq;
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;


namespace Monad.AB.Services.Business
{
    public class UserService : IUserService
    {
        private IApplicationUserRepository _applicationUserRepository;
        public UserService(IApplicationUserRepository applicationUserRepository)
        {
            _applicationUserRepository = applicationUserRepository;
        }

        public void AddUser(ApplicationUser user)
        {
            _applicationUserRepository.Create(user);
        }

        public void DeleteUser(ApplicationUser user)
        {
            _applicationUserRepository.Delete(user);
        }

        public void EditUser(ApplicationUser user)
        {
            _applicationUserRepository.Update(user);
        }

        public ApplicationUser GetUserById(int userId)
        {
            return _applicationUserRepository.GetById(userId);
        }

        public ApplicationUser GetUserByName(string userName)
        {
            return _applicationUserRepository.GetAll().Where(x => x.UserName == userName).FirstOrDefault();
        }

        public IList<ApplicationUser> GetUsers()
        {
           return  _applicationUserRepository.GetAll().ToList();
        }
    }
}
