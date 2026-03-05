using QuickStart.WepApi.Entity.Common;

namespace QuickStart.WepApi.Entity
{
    public class Feature : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string IconUrl { get; set; }
        public string ImageUrl { get; set; }
    }
}
