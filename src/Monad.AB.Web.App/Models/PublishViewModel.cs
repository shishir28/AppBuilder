using System;
using System.ComponentModel.DataAnnotations;

namespace Monad.AB.Web.App.Models
{

    public class ProjectPublishStatusViewModel
    {
        public int ProjectID { get; set; }

        public string Status { get; set; }
        public string Url { get; set; }
        [Display(Name = "Download Link")]
        public string DownloadLink { get; set; }
        [Display(Name = "Requested Date")]
        public DateTime RequestedDate { get; set; }
        public DateTime LastModifiedDateUtc { get; set; }
        public int LastModifiedBy { get; set; }
    }
}
