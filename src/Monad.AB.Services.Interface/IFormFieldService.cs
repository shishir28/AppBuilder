using Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace Monad.AB.Services.Interface
{
    public interface IFormFieldService : IService
    {
        IList<FormField> GetFormsFieldsByFormID(int formId);
        FormField GetFieldsById(int fieldId);
        IList<FormFieldView> GetFieldViewById(int fieldId);
        FormFieldView GetFieldView(int viewId);

        void AddFormFieldView(FormField fieldView);
        void AddFields(FormField form);
        void EditFields(FormField form);
        void EditFieldView(FormFieldView form);
        void DeleteFormFields(FormField form);
        IList<FieldType> GetFieldTypes();
    }
}
