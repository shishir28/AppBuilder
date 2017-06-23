﻿using Microsoft.AspNetCore.Builder;
using Microsoft.IdentityModel.Tokens;

namespace Monad.AB.Web.App.Policies
{
    public class TokenAuthOptions : AuthenticationOptions
    {
        public const string Scheme = "Bearer";
        public string Audience { get; set; }
        public string Issuer { get; set; }
        public SigningCredentials SigningCredentials { get; set; }
        public TokenAuthOptions(string audience, string issuer, RsaSecurityKey key)
        {
            AuthenticationScheme = Scheme;
            AutomaticChallenge = true;
            Audience = audience;
            Issuer = issuer;
            SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.RsaSha256Signature);
        }
    }
}
