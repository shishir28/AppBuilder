using System;
using System.Linq;
using Microsoft.AspNetCore.Http;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Primitives;

namespace Monad.AB.Web.App.Middlewares
{
    public class TokenReaderMiddleware
    {
        private void SetUserNameToHttpContext(StringValues accessToken, HttpContext httpContext)
        {
            if ((accessToken.Count == 1) && (!string.IsNullOrWhiteSpace(accessToken[0])))
            {
                var handler = new JwtSecurityTokenHandler();
                var securityToken = handler.ReadJwtToken(Convert.ToString(httpContext.Items["x-access-token"]));
                var requestedUserName = securityToken.Claims.Where(x => x.Type == "unique_name").FirstOrDefault().Value;
                httpContext.Items.Add("x-access-username", requestedUserName);
            }
        }

        public RequestDelegate Process(RequestDelegate next)
        {
            return async httpContext =>
            {
                var request = httpContext.Request;
                var path = request.Path;

                if (path.Value.StartsWith("/api/"))
                {
                    var accessToken = request.Headers["x-access-token"];
                    httpContext.Items.Add("x-access-token", accessToken);
                    SetUserNameToHttpContext(accessToken,httpContext);
                    httpContext.Items.Add("correlation-token", request.Headers["correlation-token"]);
                }
                await next(httpContext);
            };
        }
    }
}
