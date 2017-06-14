using Monad.AB.Services.Interface;
using Monad.AB.Web.App.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Monad.AB.Domain.Entities;
using AutoMapper;
namespace Monad.AB.Web.App.Controllers
{
    [Route("api/[controller]")]
    public class FormFieldController : Controller
    {
        private IFormFieldService _formFieldService;
        public FormFieldController(IFormFieldService formFieldService)
        {
            _formFieldService = formFieldService;
        }

        [HttpGet]
        [Route("GetFormFields")]
        public IEnumerable<FormFieldViewModel> GetFormFields(int formId)
        {
            var result = _formFieldService.GetFormsFieldsByFormID(formId);
            return Mapper.Map<IEnumerable<FormField>, IEnumerable<FormFieldViewModel>>(result);
        }

        [HttpGet]
        [Route("GetFormField")]
        public FormFieldViewModel GetFieldsById(int fieldId)
        {
            return Mapper.Map<FormField, FormFieldViewModel>(_formFieldService.GetFieldsById(fieldId));
        }

        [HttpGet]
        [Route("GetFormFieldView")]
        public IEnumerable<FormFieldViewViewModel> GetFormFieldView(int fieldId)
        {
            var result = _formFieldService.GetFieldViewById(fieldId);
            return Mapper.Map<IEnumerable<FormFieldView>, IEnumerable<FormFieldViewViewModel>>(result);
        }

        [HttpGet]
        [Route("GetFieldView")]
        public FormFieldViewViewModel GetFieldView(int formFieldViewId)
        {
            return Mapper.Map<FormFieldView, FormFieldViewViewModel>(_formFieldService.GetFieldView(formFieldViewId));
        }

        [HttpPost]
        [Route("AddFormField")]
        public IActionResult AddFormField([FromBody]FormFieldViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var formField = Mapper.Map<FormFieldViewModel, FormField>(model);
                    formField.CreatedDateUtc = System.DateTime.UtcNow;
                    formField.LastModifiedDateUtc = System.DateTime.UtcNow;
                    formField.LastModifiedBy = 1;

                    _formFieldService.AddField(formField);
                    HttpContext.Response.StatusCode = 201;
                    return new ObjectResult(new { StatusCode = 201, Content = $@"Field {model.Name} Created!" });
                }
                catch (System.Exception)
                {
                    return new ObjectResult(new { StatusCode = 200, Content = $@"Field {model.Name} could not Created!" });
                }
            }
            return new StatusCodeResult(412);

        }


        [HttpPut]
        [Route("EditFormField")]
        public IActionResult EditFormField([FromBody]EditFormFieldsViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var formField = Mapper.Map<EditFormFieldsViewModel, FormField>(model);
                    formField.LastModifiedDateUtc = System.DateTime.UtcNow;
                    formField.LastModifiedBy = 1;
                    _formFieldService.EditField(formField);
                    return new ObjectResult(new { StatusCode = 204, Content = $@"Field {model.Name} was modified!" });
                }
                catch (System.Exception)
                {
                    return new ObjectResult(new { StatusCode = 400, Content = $@"Field {model.Name} could not be modified!" });
                }
            }
            return new StatusCodeResult(412);
        }

        [HttpPut]
        [Route("EditFormFieldView")]
        public IActionResult EditFormFieldView([FromBody]EditFormFieldsViewViewModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var formFieldView = Mapper.Map<EditFormFieldsViewViewModel, FormFieldView>(model);
                    formFieldView.LastModifiedDateUtc = System.DateTime.UtcNow;
                    formFieldView.LastModifiedBy = 1;
                    _formFieldService.EditFieldView(formFieldView);
                    return new ObjectResult(new { StatusCode = 204, Content = $@"Field {model.Name} was modified!" });
                }
                catch (System.Exception)
                {
                    return new ObjectResult(new { StatusCode = 400, Content = $@"Field {model.Name} could not be modified!" });
                }
            }
            return new StatusCodeResult(412);
        }


        [HttpDelete]
        [Route("DeleteFormField")]
        public IActionResult DeleteFormField(int formFieldId)
        {
            if (formFieldId > 0)
            {
                try
                {
                    _formFieldService.DeleteFormField(formFieldId);
                    return new ObjectResult(new { StatusCode = 204, Content = $@"Form Field { formFieldId} deleted!" });
                }
                catch (System.Exception)
                {
                    return new ObjectResult(new { StatusCode = 400, Content = $@"Form  Field { formFieldId} could not be deleted!" });
                }
            }
            return new StatusCodeResult(412);
        }


        [HttpGet]
        [Route("GetFieldTypes")]
        public IEnumerable<FieldTypeViewModel> GetFieldTypes()
        {
            return Mapper.Map<IEnumerable<FieldType>, IEnumerable<FieldTypeViewModel>>(_formFieldService.GetFieldTypes());
        }
    }
}