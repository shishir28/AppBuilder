using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Monad.AB.Web.App.Security
{
    internal static class SecurityHelper
    {
        internal static bool SkipRequired(string path)
        {
            var nonAPIPath = !path.StartsWith("/api/");
            // add more path as per requirement in the project
            return (nonAPIPath ||
                path.Contains("/api/account/Login") ||
                path.Contains("/api/account/LogOff") ||
                path.Contains("/api/account/ForgotPassword") ||
                path.Contains("/api/account/ResetPassword") ||
                path.Contains("/api/account/Register"));
        }
        internal static bool HasAllowAnonymous(this ActionContext actionContext)
        {
            return actionContext.ActionDescriptor.FilterDescriptors.Any(item => item.Filter is IAllowAnonymous);
        }
    }
}
