using Microsoft.AspNetCore.Http;
using System;

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
