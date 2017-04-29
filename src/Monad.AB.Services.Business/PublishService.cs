using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;
using Monad.AB.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Monad.AB.Services.Business
{
    public class PublishService : IPublishService
    {
        private IWebAppConfigurationRepository _webAppConfigurationRepository;
        private IDatabaseConfigurationRepository _databaseConfigurationRepository;
        private IProjectPublishStatusRepository _projectPublishStatusRepository;


        public PublishService(IDatabaseConfigurationRepository databaseConfigurationRespository,
            IWebAppConfigurationRepository webAppConfigurationRespository,
            IProjectPublishStatusRepository projectPublishStatusRepository
            )
        {
            _databaseConfigurationRepository = databaseConfigurationRespository;
            _webAppConfigurationRepository = webAppConfigurationRespository;
            _projectPublishStatusRepository = projectPublishStatusRepository;
        }

        public void AddWebAppConfiguration(WebAppConfiguration webAppConfiguration)
        {
            webAppConfiguration.LastModifiedDateUtc = DateTime.UtcNow;
            webAppConfiguration.CreatedDateUtc = DateTime.UtcNow;
            webAppConfiguration.LastModifiedBy = 1;
            _webAppConfigurationRepository.Create(webAppConfiguration);
        }

        public void DeleteWebAppConfiguration(WebAppConfiguration webAppConfiguration)
        {
            _webAppConfigurationRepository.Delete(webAppConfiguration);
        }

        public void EditWebAppConfiguration(WebAppConfiguration webAppConfiguration)
        {
            webAppConfiguration.LastModifiedDateUtc = DateTime.UtcNow;
            webAppConfiguration.CreatedDateUtc = DateTime.UtcNow;
            webAppConfiguration.LastModifiedBy = 1;
            _webAppConfigurationRepository.Update(webAppConfiguration);
        }

        public WebAppConfiguration GetWebAppConfigurationForProject(int projectId)
        {
            return _webAppConfigurationRepository.GetAll().Where(x => x.ProjectID == projectId).FirstOrDefault();
        }
        public IList<WebAppConfiguration> GetWebAppConfigurations()
        {
            return _webAppConfigurationRepository.GetAll().ToList<WebAppConfiguration>();
        }
        public void AddDatabaseConfiguration(DatabaseConfiguration databaseConfiguration)
        {
            databaseConfiguration.LastModifiedDateUtc = DateTime.UtcNow;
            databaseConfiguration.CreatedDateUtc = DateTime.UtcNow;
            databaseConfiguration.LastModifiedBy = 1;
            _databaseConfigurationRepository.Create(databaseConfiguration);
        }

        public void DeleteDatabaseConfiguration(DatabaseConfiguration databaseConfiguration)
        {
            _databaseConfigurationRepository.Delete(databaseConfiguration);
        }

        public void EditDatabaseConfiguration(DatabaseConfiguration databaseConfiguration)
        {
            databaseConfiguration.LastModifiedDateUtc = DateTime.UtcNow;
            databaseConfiguration.CreatedDateUtc = DateTime.UtcNow;
            databaseConfiguration.LastModifiedBy = 1;
            _databaseConfigurationRepository.Update(databaseConfiguration);
        }

        public DatabaseConfiguration GetDatabaseConfigurationForProject(int projectId)
        {
            return _databaseConfigurationRepository.GetAll().Where(x => x.ProjectID == projectId).FirstOrDefault();
        }
        public IList<DatabaseConfiguration> GetDatabaseConfigurations()
        {
            return _databaseConfigurationRepository.GetAll().ToList<DatabaseConfiguration>();
        }

        public ProjectPublishStatus GetPublishStatus(int projectId)
        {
            return _projectPublishStatusRepository.GetAll().Where(x => x.ProjectID == projectId).SingleOrDefault();
        }

        public WebAppConfiguration PortExistsDetails(string portNumber)
        {
            return _webAppConfigurationRepository.GetAll().Where(x => x.PortNumber == portNumber).FirstOrDefault();
        }
    }
}
