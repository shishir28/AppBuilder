
using Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace Monad.AB.Services.Interface
{
    public interface IActivityService : IService
    {
        void AddActivity(Activity activity);
        void EditActivity(Activity activity);
        void DeleteActivity(Activity activity);
        IList<Activity> GetAllActivity();
        Activity GetActivityById(int id);
      
        bool AddActivity(string activityId, string roleId, string description, string value, string createdBy);

        IList<Activity> GetActivitiesByRoleId(string roleId);


        IEnumerable<Activity> GetActivitiesByUserId(string userId);
    }
}
