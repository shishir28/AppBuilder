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
using Microsoft.AspNetCore.Authorization;

namespace Monad.AB.Web.App.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Policy = "Bearer")]
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
        public IEnumerable<RoleViewModel> GetAllRoles()
        {
            var roles = _roleService.GetAll();
            return Mapper.Map<IEnumerable<Role>, IEnumerable<RoleViewModel>>(roles);
        }

        [HttpGet]
        [Route("GetRoleById")]
        public RoleViewModel GetRoleById(string roleId)
        {
            var role = _roleService.GetRoleById(roleId);
            return Mapper.Map<Role, RoleViewModel>(role.Result);
        }

        [HttpGet]
        [Route("GetRoleByName")]
        public RoleViewModel GetRoleByName(string roleName)
        {
            var role = _roleService.GetRoleByName(roleName);
            return Mapper.Map<Role, RoleViewModel>(role.Result);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("AddRole")]
        public async Task<IActionResult> AddRole([FromBody] AddRoleViewModel model)
        {
            if (ModelState.IsValid)
            {
                var applicationRole = Mapper.Map<AddRoleViewModel, Role>(model);
                var result = await _accountService.AddRole(applicationRole);

                if (result.Succeeded)
                {
                    return new ObjectResult(new { StatusCode = 201, Content = $@"Role {model.Name} Created" });
                }
                else
                    return new ObjectResult(new { StatusCode = 200, Content = result.Errors });

            }
            return new StatusCodeResult(412);
        }

        [HttpPut]
        [AllowAnonymous]
        [Route("EditRole")]
        public async Task<IActionResult> EditRole([FromBody] RoleViewModel model)
        {
            if (ModelState.IsValid)
            {
                var applicationRole = Mapper.Map<RoleViewModel, Role>(model);
                var result = await _accountService.UpdateRole(applicationRole);
                if (result.Succeeded)
                {
                    return new ObjectResult(new { StatusCode = 204 });   
                }
                else
                    return new ObjectResult(new { StatusCode = 400, Content = result.Errors });

            }
            return new StatusCodeResult(412);
        }

        [HttpGet]
        [Route("GetRolePermissions")]
        public IList<RoleRightsViewModel> GetRolePermissions(string roleName)
        {
            var response = _roleService.GetRoleRights(roleName);
            return Mapper.Map<IList<RoleRightRequest>, IList<RoleRightsViewModel>>(response);
        }
        [HttpPut]
        [Route("UpdateRoleRights")]
        public IActionResult UpdateRoleRights([FromBody] UpdateRoleRightsViewModel model)// [FromBody] string roleId, [FromBody] IList<RoleRightsViewModel> model)
        {
            try
            {
                var updateData = Mapper.Map<IList<RoleRightsViewModel>, IList<RoleRightRequest>>(model.RoleRights);
                _roleService.UpdateRoleRights(model.ApplicationRoleId, updateData);
                return new ObjectResult(new { StatusCode = 204, Content = $@"Role Rights updated!" });
            }
            catch (System.Exception ex)
            {
                return new ObjectResult(new { StatusCode = 400, Content = $@"Role Rights could not be updated!" });
            }
        }
        #endregion  User Management       
    }
}