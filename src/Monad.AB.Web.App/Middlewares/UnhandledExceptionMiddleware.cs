using Microsoft.Extensions.Logging;
using System;
using System.Text;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Monad.AB.Web.App.Middlewares
{
    public class UnhandledExceptionMiddleware
    {
        public RequestDelegate Process(RequestDelegate next)
        {
            return async httpContext =>
            {
                var correlationId = httpContext.Items["correlation-token"];

                try
                {
                    await next(httpContext);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.StackTrace);
                    Console.WriteLine(ex.Message);

                }
            };
        }
    }
}
