﻿using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;
using Monad.AB.Services.Interface;
using System.Collections.Generic;
using System.Linq;
using System;

namespace Monad.AB.Services.Business
{
    public class FormFieldService : IFormFieldService
    {
        private IFormFieldRepository _formFieldRepository;
        private IFieldTypeRepository _fieldTypeRepository;
        private IFormFieldViewRepository _fieldViewRepository;
        private IFormViewTypeRepository _formViewTypeRepository;

        public FormFieldService(IFormFieldRepository formFieldRepository,
            IFieldTypeRepository fieldTypeRepository,
            IFormFieldViewRepository fieldViewRepository,
            IFormViewTypeRepository formViewTypeRepository
            )
        {
            _formFieldRepository = formFieldRepository;
            _fieldTypeRepository = fieldTypeRepository;
            _fieldViewRepository = fieldViewRepository;
            _formViewTypeRepository = formViewTypeRepository;
        }
        public void AddFields(FormField form)
        {
            form.LastModifiedDateUtc = DateTime.UtcNow;
            form.CreatedDateUtc = DateTime.UtcNow;
            form.LastModifiedBy = 1;
            _formFieldRepository.Create(form);
        }

        public void AddField(FormField field)
        {
            field.LastModifiedDateUtc = DateTime.UtcNow;
            field.CreatedDateUtc = DateTime.UtcNow;
            field.LastModifiedBy = 1;
            _formFieldRepository.Create(field);
            // updatedFormField Can not be more than one 
            var updatedFormField = _formFieldRepository.GetAll().Where(x => x.FormID == field.FormID && x.Name == field.Name).FirstOrDefault();
            AddFormFieldView(updatedFormField);
        }

        public void AddFormFieldView(FormField formField)
        {
            var viewTypes = _formViewTypeRepository.GetAll().ToList();
            foreach (var item in viewTypes)
            {
                var formFieldView = new FormFieldView
                {
                    ViewID = item.Id,
                    FieldID = formField.Id,
                    FormFieldId = formField.Id,
                    Column = formField.ColumnNumber,
                    ColumnSpan = formField.ColumnSpan,
                    Row = formField.RowNumber,
                    RowSpan = formField.RowSpan,
                    CreatedDateUtc = System.DateTime.UtcNow,
                    LastModifiedDateUtc = System.DateTime.UtcNow,
                    LastModifiedBy = 1,
                    ReadOnly = (item.Name == "Grid" || item.Name == "View")
                };
                _fieldViewRepository.Create(formFieldView);
            }
        }

        public void DeleteFormField(int formFieldId)
        {
            var tobeDeleted = _formFieldRepository.GetById(formFieldId);
            _formFieldRepository.Delete(tobeDeleted);
        }

        public void EditField(FormField field)
        {
            field.LastModifiedDateUtc = DateTime.UtcNow;
            field.CreatedDateUtc = DateTime.UtcNow;
            field.LastModifiedBy = 1;
            _formFieldRepository.Update(field);
        }

        public void EditFieldView(FormFieldView form)
        {
            form.LastModifiedDateUtc = DateTime.UtcNow;
            form.CreatedDateUtc = DateTime.UtcNow;
            form.LastModifiedBy = 1;
            _fieldViewRepository.Update(form);
        }

        public FormField GetFieldsById(int fieldID)
        {
            return _formFieldRepository.GetAll().Where(x => x.Id == fieldID).FirstOrDefault();
        }

        public FormFieldView GetFieldView(int formFieldViewId)
        {
            var viewTypes = _formViewTypeRepository.GetAll().ToList();
            var formFieldViews = _fieldViewRepository.GetAll().Where(x => x.Id == formFieldViewId).ToList();
            foreach (var view in formFieldViews)
            {
                view.View = viewTypes.Where(x => x.Id == view.ViewID).SingleOrDefault();
            }
            return _fieldViewRepository.GetAll().Where(x => x.Id == formFieldViewId).FirstOrDefault();
        }

        public IList<FormFieldView> GetFieldViewById(int fieldId)
        {
            var viewTypes = _formViewTypeRepository.GetAll().ToList();
            var formFieldViews = _fieldViewRepository.GetAll().Where(x => x.FieldID == fieldId).ToList();
            foreach (var view in formFieldViews)
            {
                view.View = viewTypes.Where(x => x.Id == view.ViewID).SingleOrDefault();
            }
            return formFieldViews;
        }

        public IList<FieldType> GetFieldTypes()
        {
            return _fieldTypeRepository.GetAll().ToList();
        }

        public IList<FormField> GetFormsFieldsByFormID(int formId)
        {
            return _formFieldRepository.GetAll().Where(x => x.FormID == formId).ToList();
        }
    }
}
