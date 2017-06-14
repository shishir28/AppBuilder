using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Monad.AB.Domain.Entities;
using AutoMapper;
namespace Monad.AB.Web.App.Controllers
{
    [Route("api/[controller]")]
    public class FormController : Controller
    {
        private IFormService _formService;
        public FormController(IFormService formService)
        {
            _formService = formService;
        }

        [HttpGet]
        [Route("GetForms")]
        public IEnumerable<Form> GetForms(int projectId)
        {
            return _formService.GetFormsForProject(projectId);
        }

        [HttpGet]
        [Route("GetForm")]
        public FormViewModel GetForm(int formId)
        {
            return Mapper.Map<Form, FormViewModel>(_formService.GetFormById(formId));
        }


        [HttpPost]
        [Route("AddForm")]
        public IActionResult AddForm([FromBody]FormViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var form = Mapper.Map<FormViewModel, Form>(model);
                    form.CreatedDateUtc = System.DateTime.UtcNow;
                    form.LastModifiedDateUtc = System.DateTime.UtcNow;
                    form.LastModifiedBy = 1;
                    _formService.AddForm(form);
                    return new ObjectResult(new { StatusCode = 201, Content = $@"Form {model.FormName} Created!" });
                }
                catch (System.Exception ex)
                {
                    return new ObjectResult(new { StatusCode = 400, Content = $@"Form {model.FormName} could not Created!" });
                }

            }
            return new StatusCodeResult(412);
        }

        [HttpPut]
        [Route("EditForm")]
        public IActionResult EditForm([FromBody]EditFormViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var form = Mapper.Map<EditFormViewModel, Form>(model);
                    form.LastModifiedDateUtc = System.DateTime.UtcNow;
                    form.LastModifiedBy = 1;
                    _formService.EditForm(form);
                    return new ObjectResult(new { StatusCode = 204, Content = $@"Form {model.FormName} Saved!" });
                }
                catch (System.Exception ex)
                {
                    return new ObjectResult(new { StatusCode = 400, Content = $@"Form {model.FormName} could not Saved! " });
                }
            }
            return new StatusCodeResult(412);
        }

        [HttpDelete]
        [Route("DeleteForm")]
        public IActionResult DeleteForm(int formId)
        {
            if (formId > 0)
            {
                try
                {
                    _formService.DeleteForm(formId);
                    return new ObjectResult(new { StatusCode = 204, Content = $@"Form { formId} deleted!" });
                }
                catch (System.Exception)
                {
                    return new ObjectResult(new { StatusCode = 404, Content = $@"Form { formId} could not be deleted!" });
                }
            }
            return new StatusCodeResult(412);
        }
    }
}