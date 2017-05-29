using Microsoft.AspNetCore.Http;
using System;

namespace Monad.AB.Web.App.Middlewares
{
    public class CorrelationTokenMiddleware
    {
        public RequestDelegate Process(RequestDelegate next)
        {
            return async httpContext =>
            {
                Guid correlationToken;
                var request = httpContext.Request;
                var path = httpContext.Request.Path;
                var correlationTokenString = Convert.ToString(request.Headers["Correlation-Token"]);

                if (string.IsNullOrWhiteSpace(correlationTokenString) || (!Guid.TryParse(correlationTokenString, out correlationToken)))
                    correlationToken = Guid.NewGuid();

                httpContext.Items.Add("Correlation-Token", correlationToken);
                request.Headers["Correlation-Token"] = correlationToken.ToString();
                await next(httpContext);
            };
        }
    }
}
