using Monad.AB.Domain.Entities;
using System.Collections.Generic;

namespace Monad.AB.Services.Interface
{
    public interface IFormService: IService
    {
        IList<Form> GetFormsForProject( int projectId);
        Form GetFormById(int formId);

        void AddForm(Form form);
        void EditForm(Form form);
        void DeleteForm(int formId);
    }
}
