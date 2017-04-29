using Monad.AB.Services.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;

namespace Monad.AB.Services.Business
{
    public class FormFieldViewService : IFormFieldViewService
    {
        private IFormFieldViewRepository _formFieldViewRepository;
        public FormFieldViewService(IFormFieldViewRepository fromFieldViewRespository)
        {
            _formFieldViewRepository = fromFieldViewRespository;
        }


        public void AddFormFieldView(FormFieldView formFieldView)
        {
            formFieldView.LastModifiedDateUtc = DateTime.UtcNow;
            formFieldView.CreatedDateUtc = DateTime.UtcNow;
            formFieldView.LastModifiedBy = 1;
            _formFieldViewRepository.Create(formFieldView);
        }

        public void DeleteFormFieldView(FormFieldView formFieldView)
        {
            _formFieldViewRepository.Delete(formFieldView);
        }

        public void EditFormFieldView(FormFieldView formFieldView)
        {
            formFieldView.LastModifiedDateUtc = DateTime.UtcNow;
            formFieldView.CreatedDateUtc = DateTime.UtcNow;
            formFieldView.LastModifiedBy = 1;
            _formFieldViewRepository.Update(formFieldView);
        }

        public FormFieldView GetFormFieldViewById(int formFieldViewId)
        {
            return _formFieldViewRepository.GetAll().Where(x => x.Id == formFieldViewId).FirstOrDefault();
        }

        public IList<FormFieldView> GetFormFieldViewsForFirmField(int fomFieldId)
        {
            return _formFieldViewRepository.GetAll().Where(x => x.FieldID == fomFieldId).ToList();
        }
    }
}
