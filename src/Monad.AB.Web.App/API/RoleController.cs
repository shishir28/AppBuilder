using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Monad.AB.Domain.Entities;
using AutoMapper;
using Monad.AB.Domain.Entities.Identity;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using Monad.AB.Domain.Entities.Dto;

namespace Monad.AB.Web.App.Controllers
{
    [Route("api/[controller]")]
    public class RoleController : Controller
    {
        private IAccountService _accountService;
        private IRoleService _roleService;
        public RoleController(IAccountService accountService, IRoleService roleService)
        {
            _accountService = accountService;
            _roleService = roleService;
        }

        #region User Management

        [HttpGet]
        [Route("GetAllRoles")]
        public IEnumerable<LookupTypeViewModel> GetAllRoles()
        {
            var roles = _roleService.GetAll();
            return Mapper.Map<IEnumerable<Role>, IEnumerable<LookupTypeViewModel>>(roles);
        }

        [HttpGet]
        [Route("GetRoleById")]
        public LookupTypeViewModel GetRoleById(string roleId)
        {
            var role = _roleService.GetRoleById(roleId);
            return Mapper.Map<Role, LookupTypeViewModel>(role.Result);
        }

        [HttpGet]
        [Route("GetRoleByName")]
        public LookupTypeViewModel GetRoleByName(string roleName)
        {
            var role = _roleService.GetRoleByName(roleName);
            return Mapper.Map<Role, LookupTypeViewModel>(role.Result);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("AddRole")]
        public async Task<IActionResult> AddRole([FromBody] AddRoleViewModel model)
        {
            if (ModelState.IsValid)
            {
                model.IsActive = true;
                var applicationRole = Mapper.Map<AddRoleViewModel, Role>(model);
                var result = await _accountService.AddRole(applicationRole);

                if (result.Succeeded)
                {
                    HttpContext.Response.StatusCode = 201;
                    return new ObjectResult(new { StatusCode = 201, Content = $@"Role {model.Name} Created" }); // mvc always http client always receives 200 as http response message so need this hack 
                }
                else
                    return new ObjectResult(new { StatusCode = 200, Content = result.Errors });

            }
            return new StatusCodeResult(412);
        }

        [HttpPut]
        [AllowAnonymous]
        [Route("EditRole")]
        public async Task<IActionResult> EditRole([FromBody] LookupTypeViewModel model)
        {
            if (ModelState.IsValid)
            {
                var applicationRole = Mapper.Map<LookupTypeViewModel, Role>(model);
                var result = await _accountService.UpdateRole(applicationRole);

                if (result.Succeeded)
                {
                    HttpContext.Response.StatusCode = 204;
                    return new ObjectResult(new { StatusCode = 204 });   // mvc always http client always receives 200 as http response message so need this hack 
                }
                else
                    return new ObjectResult(new { StatusCode = 400, Content = result.Errors });

            }
            return new StatusCodeResult(412);
        }
        [HttpGet]
        [Route("GetRolePermissions")]
        public IList<RoleRightsViewModel> GetRolePermissions(string applicationRole)
        {
            var response = _roleService.GetRoleRights(applicationRole);
            return Mapper.Map<IList<RoleRightsDto>, IList<RoleRightsViewModel>>(response);
        }
        [HttpPost]
        [Route("UpdateRoleRights")]
        public IActionResult UpdateRoleRights([FromBody] UpdateRoleRightsView model)
        {
            _roleService.UpdateRoleRights(model.RoleRights, model.ApplicationRoleId);
            return (new ObjectResult(true) { StatusCode = 200 }); ;
        }
        #endregion  User Management       
    }
}