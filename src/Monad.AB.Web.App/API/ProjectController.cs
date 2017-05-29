using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Monad.AB.Domain.Entities;

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
    }
}