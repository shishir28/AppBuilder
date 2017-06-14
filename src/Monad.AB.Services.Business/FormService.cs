using Monad.AB.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Services.Business
{
    public class FormService : IFormService
    {
        private IFormRepository _formRepository;
        public FormService(IFormRepository fromRespository)
        {
            _formRepository = fromRespository;
        }

        public void AddForm(Form form)
        {
            form.LastModifiedDateUtc = DateTime.UtcNow;
            form.CreatedDateUtc = DateTime.UtcNow;
            form.LastModifiedBy = 1;
            _formRepository.Create(form);
        }

        public void DeleteForm(int formId)
        {
            var form = _formRepository.GetById(formId);
            _formRepository.Delete(form);
        }

        public void EditForm(Form form)
        {
            form.LastModifiedDateUtc = DateTime.UtcNow;
            form.CreatedDateUtc = DateTime.UtcNow;
            form.LastModifiedBy = 1;
            _formRepository.Update(form);
        }

        public Form GetFormById(int formId)
        {
            return _formRepository.GetAll().Where(x => x.Id == formId).FirstOrDefault();
        }

        public IList<Form> GetFormsForProject(int projectId)
        {
            return _formRepository.GetAll().Where(x => x.ProjectID == projectId).ToList();
        }
    }
}
