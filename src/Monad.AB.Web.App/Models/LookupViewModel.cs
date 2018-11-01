namespace Monad.AB.Web.App.Models
{
    public class LookupTypeVM
    {
        public int LookupTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class LookupValueViewModel
    {
        public int Id { get; set; }
        public int LookupValueId { get; set; }
        public int LookupTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
