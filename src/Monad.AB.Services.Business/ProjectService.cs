using System;
using System.Linq;
using System.Collections.Generic;
using Monad.AB.Domain.Entities;
using Monad.AB.Services.Interface;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Services.Business
{
    public class ProjectService : IProjectService
    {
        private IWebAppConfigurationRepository _webAppConfigurationRepository;
        private IDatabaseConfigurationRepository _databaseConfigurationRepository;

        private IProjectRepository _projectRepository;
        private IFormRepository _formRepository;
        private IFormFieldRepository _formFieldRepository;
        private IFieldTypeRepository _fieldTypeRepository;
        private IFormFieldViewRepository _formFieldViewRepository;
        private IFormViewTypeRepository _formViewTypeRepository;
        private IProjectPublishStatusRepository _projectPublishStatusRepository;

        public ProjectService(IProjectRepository projectRespository,
            IDatabaseConfigurationRepository databaseConfigurationRespository,
            IWebAppConfigurationRepository webAppConfigurationRespository,
            IFormRepository formRepository,
            IFormFieldRepository formFieldRepository,
            IFieldTypeRepository fieldTypeRepository,
            IFormFieldViewRepository formFieldViewRepository,
            IFormViewTypeRepository formViewTypeRepository,
            IProjectPublishStatusRepository projectPublishStatusRepository
            )
        {
            _projectRepository = projectRespository;
            _databaseConfigurationRepository = databaseConfigurationRespository;
            _webAppConfigurationRepository = webAppConfigurationRespository;
            _formRepository = formRepository;
            _formFieldRepository = formFieldRepository;
            _fieldTypeRepository = fieldTypeRepository;
            _formFieldViewRepository = formFieldViewRepository;
            _formViewTypeRepository = formViewTypeRepository;
            _projectPublishStatusRepository = projectPublishStatusRepository;
        }

        public void AddProject(Project project)
        {
            project.LastModifiedDateUtc = DateTime.UtcNow;
            project.CreatedDateUtc = DateTime.UtcNow;
            project.LastModifiedBy = 1;
            _projectRepository.Create(project);
        }

        public void DeleteProject(int projectId)
        {
            var tobeDeleted = _projectRepository.GetById(projectId);
            _projectRepository.Delete(tobeDeleted);
        }

        public void EditProject(Project project)
        {
            project.LastModifiedDateUtc = DateTime.UtcNow;
            project.CreatedDateUtc = DateTime.UtcNow;
            project.LastModifiedBy = 1;
            _projectRepository.Update(project);
        }

        public IList<Project> GetProjectsForUser(string userName)
        {
            return _projectRepository.GetAll().Where(x => x.UserName == userName).ToList();
        }

        public Project GetProjectById(int projectId)
        {
            return _projectRepository.GetById(projectId);
        }

        // Shishir Loading not implemented and hence using messier approach 

        public Project LoadProjectMetaData(Project project)
        {
            var fieldTypes = _fieldTypeRepository.GetAll();
            var forms = _formRepository.GetAll().Where(x => x.ProjectID == project.Id).ToList();
            foreach (var form in forms)
            {
                form.Fields = _formFieldRepository.GetAll().Where(x => x.FormID == form.Id).ToList();

                foreach (var field in form.Fields)
                {
                    field.FieldType = fieldTypes.Where(x => x.Id == field.FieldTypeID).SingleOrDefault();
                    field.Views = _formFieldViewRepository.GetAll().Where(x => x.FieldID == field.Id).ToList();
                    foreach (var view in field.Views)
                    {
                        view.View = _formViewTypeRepository.GetAll().Where(x => x.Id == view.ViewID).FirstOrDefault();
                    }
                }
            }

            // Shishir Dont know why I need to execute it again so that string is not swapped with int
            foreach (var form in forms)
            {
                form.Fields = _formFieldRepository.GetAll().Where(x => x.FormID == form.Id).ToList();
                foreach (var field in form.Fields)
                {
                    field.FieldType = fieldTypes.Where(x => x.Id == field.FieldTypeID).SingleOrDefault();
                }
            }

            project.Forms = forms;
            project.WebServerConfiguration =
                _webAppConfigurationRepository.GetAll().Where(x => x.ProjectID == project.Id).FirstOrDefault();

            project.DatabaseConfiguration =
            _databaseConfigurationRepository.GetAll().Where(x => x.ProjectID == project.Id).FirstOrDefault();

            return project;
        }

        public void IntitateProjectPublish(int projectId)
        {
            var projectPublishStattus = LoadProjectPublishStatus(projectId);
            if (projectPublishStattus != null)
            {
                projectPublishStattus.Status = "Not Started";
                projectPublishStattus.CreatedDateUtc = DateTime.UtcNow;
                projectPublishStattus.LastModifiedDateUtc = DateTime.UtcNow;
                projectPublishStattus.LastModifiedBy = 1;
                _projectPublishStatusRepository.Update(projectPublishStattus);
            }
            else
            {

                projectPublishStattus = new ProjectPublishStatus
                {
                    ProjectID = projectId,
                    Status = "Not Started",
                    CreatedDateUtc = DateTime.UtcNow,
                    LastModifiedDateUtc = DateTime.UtcNow,
                    LastModifiedBy = 1
                };
                _projectPublishStatusRepository.Create(projectPublishStattus);
            }

        }

        public void UpdateProjectPublish(int projectId, string status, string url, string downloadLink)
        {
            //Shishir assume it will always have one record
            var entity = LoadProjectPublishStatus(projectId);
            entity.Status = status;
            entity.Url = url;
            entity.DownloadLink = downloadLink;
            _projectPublishStatusRepository.Update(entity);
        }


        public ProjectPublishStatus LoadProjectPublishStatus(int projectId)
        {
            return _projectPublishStatusRepository.GetAll().Where(x => x.ProjectID == projectId).SingleOrDefault();
        }
        public IList<ProjectPublishStatus> GetAllProjectPublishStatus()
        {
            return _projectPublishStatusRepository.GetAll().ToList();
        }
        public bool ProjectExistsDetails(string pojectName)
        {
            var project = _projectRepository.GetAll().Where(x => x.Name == pojectName).FirstOrDefault();
            if (project != null && project.Id != 0)
            {
                return true;
            }
            return false;
        }
    }
}
