using Monad.AB.Domain.Entities;

namespace Monad.AB.Services.Interface.CodeGenerators
{
    public interface IProjectBuilder<T>
    {
        T Build(Project project, string templatePath, string rootPath);
    }
}
