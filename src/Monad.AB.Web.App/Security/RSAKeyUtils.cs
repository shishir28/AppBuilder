using System.IO;
using System.Security.Cryptography;
using Newtonsoft.Json;
using Microsoft.IdentityModel.Tokens;

namespace Monad.AB.Web.App.Security
{
    public class RSAKeyUtils
    {
        private class RSAParametersWithPrivate
        {
            public byte[] D { get; set; }
            public byte[] DP { get; set; }
            public byte[] DQ { get; set; }
            public byte[] Exponent { get; set; }
            public byte[] InverseQ { get; set; }
            public byte[] Modulus { get; set; }
            public byte[] P { get; set; }
            public byte[] Q { get; set; }

            public void SetParameters(RSAParameters p)
            {
                D = p.D;
                DP = p.DP;
                DQ = p.DQ;
                Exponent = p.Exponent;
                InverseQ = p.InverseQ;
                Modulus = p.Modulus;
                P = p.P;
                Q = p.Q;
            }
            public RSAParameters ToRSAParameters()
            {
                return new RSAParameters()
                {
                    D = this.D,
                    DP = this.DP,
                    DQ = this.DQ,
                    Exponent = this.Exponent,
                    InverseQ = this.InverseQ,
                    Modulus = this.Modulus,
                    P = this.P,
                    Q = this.Q

                };
            }
        }
      
        private static RSAParameters GetParametersFromKey(string fileName)
        {
            if (!File.Exists(fileName)) throw new FileNotFoundException("Check configuration - cannot find auth key file: " + fileName);
            var key = JsonConvert.DeserializeObject<RSAParametersWithPrivate>(File.ReadAllText(fileName));
            return key.ToRSAParameters();
        }
      
        public static RsaSecurityKey GetKey(string fileName)
        {
            var keyParams = RSAKeyUtils.GetParametersFromKey(fileName);
            var key = new RsaSecurityKey(keyParams);
            return key;
        }
    }
}