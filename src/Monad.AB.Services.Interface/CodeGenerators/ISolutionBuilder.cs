using Monad.AB.Domain.Entities;

namespace Monad.AB.Services.Interface.CodeGenerators
{
    public interface ISolutionBuilder
    {
        void Build(Project project);
    }
}
