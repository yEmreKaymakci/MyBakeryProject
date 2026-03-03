using System.ComponentModel.DataAnnotations;

namespace QuickStart.WepApi.Entity.Common
{
    public abstract class BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
