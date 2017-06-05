using Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace Monad.AB.Services.Interface
{
    public interface IProjectService:IService
    {
        IList<Project> GetProjectsForUser(string userName);
        Project GetProjectById(int projectId);
        void AddProject(Project project);
        void EditProject(Project project);
        void DeleteProject(int projectId);
        Project LoadProjectMetaData(Project project);
        void IntitateProjectPublish(int projectId);
        void UpdateProjectPublish(int projectId, string status, string url, string downloadLink);
        ProjectPublishStatus LoadProjectPublishStatus(int  projectId);
        IList<ProjectPublishStatus> GetAllProjectPublishStatus();
        bool ProjectExistsDetails(string pojectName);

    }
}
