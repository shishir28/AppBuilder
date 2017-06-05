using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Monad.AB.Domain.Entities;
using AutoMapper;
namespace Monad.AB.Web.App.Controllers
{
    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        private IProjectService _projectService;
        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        [Route("GetProjects")]
        public IEnumerable<Project> GetProjects(string userName)
        {
            return _projectService.GetProjectsForUser(userName);
        }

        [HttpGet]
        [Route("GetProject")]
        public Project GetProject(int projectId)
        {
            return _projectService.GetProjectById(projectId);
        }

        [HttpPost]
        [Route("AddProject")]
        public IActionResult AddProject([FromBody]ProjectViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var project = Mapper.Map<ProjectViewModel, Project>(model);
                    project.CreatedDateUtc = System.DateTime.UtcNow;
                    project.LastModifiedDateUtc = System.DateTime.UtcNow;
                    project.LastModifiedBy = 1;
                    _projectService.AddProject(project);
                    return new ObjectResult(new { StatusCode = 201, Content = $@"Project {model.Name} Created!" });
                }
                catch (System.Exception ex)
                {
                    return new ObjectResult(new { StatusCode = 400, Content = $@"Project {model.Name} could not Created!" });
                }
            }
            return new StatusCodeResult(412);
        }

        [HttpPut]
        [Route("EditProject")]
        public IActionResult EditProject([FromBody]ProjecEditModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var project = Mapper.Map<ProjecEditModel, Project>(model);
                    project.LastModifiedDateUtc = System.DateTime.UtcNow;
                    project.LastModifiedBy = 1;
                    _projectService.EditProject(project);
                    return new ObjectResult(new { StatusCode = 204, Content = $@"Project {model.Name} Created!" });
                }
                catch (System.Exception ex)
                {
                    return new ObjectResult(new { StatusCode = 400, Content = $@"Project {model.Name} could not Created! " });
                }
            }
            return new StatusCodeResult(412);
        }

        [HttpDelete]
        [Route("DeleteProject")]
        public IActionResult DeleteProject(int projectId)
        {
            if (projectId > 0)
            {
                try
                {
                    _projectService.DeleteProject(projectId);
                    return new ObjectResult(new { StatusCode = 204, Content = $@"Project { projectId} deleted!" });
                }
                catch (System.Exception)
                {
                    return new ObjectResult(new { StatusCode = 404, Content = $@"Project { projectId} could not be deleted!" });
                }
            }
            return new StatusCodeResult(412);
        }
    }
}