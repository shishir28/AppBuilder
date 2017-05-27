//using Microsoft.AspNetCore.Authentication;
//using Microsoft.IdentityModel.Tokens;

//namespace Monad.AB.Web.App.Policies
//{
//    public class TokenAuthOptions : SharedAuthenticationOptions
//    {
//        public const string Scheme = "Bearer";
//        public string Audience { get; set; }
//        public string Issuer { get; set; }
//        public SigningCredentials SigningCredentials { get; set; }

//        public TokenAuthOptions(string audience, string issuer, RsaSecurityKey key)
//        {
//            SignInScheme = Scheme;
//            //AuthenticationScheme = Scheme;
//            //AutomaticAuthenticate = true;
//            Audience = audience;
//            Issuer = issuer;
//            SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.RsaSha256Signature);
//        }

//    }
//}
