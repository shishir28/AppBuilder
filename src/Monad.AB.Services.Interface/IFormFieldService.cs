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

        void AddField(FormField field);
        void EditField(FormField field);
        void EditFieldView(FormFieldView form);
        void DeleteFormField(int formFieldId);
        IList<FieldType> GetFieldTypes();
    }
}
