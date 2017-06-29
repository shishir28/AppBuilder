namespace Monad.AB.Domain.Entities
{
    public class LookupValue : BaseEntity
    {
        public int LookupTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
