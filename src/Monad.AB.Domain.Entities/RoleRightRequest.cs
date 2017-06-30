using System;

namespace Monad.AB.Domain.Entities
{
    public class RoleRightRequest : BaseEntity
    {
        public string ResourceName { get; set; }
        public int IsAdd { get; set; }
        public int IsEdit { get; set; }
        public int IsDelete { get; set; }
        public int IsView { get; set; }
        public int IsList { get; set; }
        public int AddId { get; set; }
        public int EditId { get; set; }
        public int DeleteId { get; set; }
        public int ViewId { get; set; }
        public int ListId { get; set; }
    }
}
