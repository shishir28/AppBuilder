using Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace Monad.AB.Services.Interface
{
    public interface IPublishService : IService
    {
        IList<WebAppConfiguration> GetWebAppConfigurations();
        WebAppConfiguration GetWebAppConfigurationForProject(int projectId);
        void AddWebAppConfiguration(WebAppConfiguration databaseConfiguration);
        void EditWebAppConfiguration(WebAppConfiguration databaseConfiguration);
        void DeleteWebAppConfiguration(WebAppConfiguration databaseConfiguration);

        IList<DatabaseConfiguration> GetDatabaseConfigurations();
        DatabaseConfiguration GetDatabaseConfigurationForProject(int projectId);
        void AddDatabaseConfiguration(DatabaseConfiguration databaseConfiguration);
        void EditDatabaseConfiguration(DatabaseConfiguration databaseConfiguration);
        void DeleteDatabaseConfiguration(DatabaseConfiguration databaseConfiguration);

        ProjectPublishStatus GetPublishStatus(int projectId);
        WebAppConfiguration PortExistsDetails(string portNumber);
    }
}
