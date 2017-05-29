using Microsoft.Extensions.Logging;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace Monad.AB.Web.App.Middlewares
{
    public class PerformanceLoggingMiddleware
    {
        public RequestDelegate Process(RequestDelegate next)
        {
            return async httpContext =>
            {
                var request = httpContext.Request;
                var path = httpContext.Request.Path;
                var ignnoreExtensions = new string[] { ".js", ".css", ".jpg", ".gif", ".png", ".woff", ".woff2", ".xml" };
                bool ignoreMidddleware = ignnoreExtensions.Any(x => path.Value.EndsWith(x));
                var requestInfo = string.Format("{0} {1} ", request.Method, path);
                var timer = new Stopwatch();
                if (!ignoreMidddleware) timer.Start();

                await next(httpContext);

                if (!ignoreMidddleware)
                {
                    timer.Stop();
                    //var instance = httpContext.RequestServices.GetService(typeof(IOptions<CustomLoggingSettings>)) as IOptions<CustomLoggingSettings>;
                    //var logger = LogHelper.CreateLogger<PerformanceLoggingMiddleware>(instance);
                    //logger.LogInformation(LogHelper.CreateLogData(request.Headers["correlation-token"],
                    //                         string.Format("Request {0} took {1} Milliseconds ", requestInfo, timer.ElapsedMilliseconds) ,
                    //                         "PerformanceLoggingMiddleware.cs", 
                    //                         "PerformanceLoggingMiddleware", 
                    //                         "Process"));
                }
            };
        }
    }
}
