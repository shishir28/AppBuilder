using Monad.AB.Domain.Entities;

namespace Monad.AB.Services.Interface.CodeGenerators
{
    public interface IBuildScriptBuilder
    {
        void Build(Project project);
    }
}
