using Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace Monad.AB.Services.Interface
{
    public interface IFormFieldViewService : IService
    {
        IList<FormFieldView> GetFormFieldViewsForFirmField( int formFieldID);
        FormFieldView GetFormFieldViewById(int formFieldViewId);

        void AddFormFieldView(FormFieldView formFieldView);
        void EditFormFieldView(FormFieldView formFieldView);
        void DeleteFormFieldView(FormFieldView formFieldView);
    }
}
