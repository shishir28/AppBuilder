using System;
using System.Collections.Generic;
using System.Text;

namespace Monad.AB.Common
{
    public class AccountSecuritySettings
    {
        public int AccountLockoutTimeSpanInMinutes { get; set; }
        public bool LockoutOnFailure { get; set; }
        public int MaxFailedAccessAttemptsBeforeLockout { get; set; }
        public int MaxPasswordAgeInDay { get; set; }
        public int PreviousPasswordCheckCount { get; set; }
    }
}
