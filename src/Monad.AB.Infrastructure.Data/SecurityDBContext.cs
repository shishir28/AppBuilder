using Monad.AB.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Monad.AB.Domain.Entities.Identity;
namespace Monad.AB.Infrastructure.Data
{
    public class SecurityDBContext : IdentityDbContext<User, Role, string>
    {
        public SecurityDBContext(DbContextOptions<SecurityDBContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>(b =>
            {
                b.ToTable("ApplicationUser");
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("ApplicationUserId");
            });

            modelBuilder.Entity<Role>(b =>
            {
                b.ToTable("ApplicationRole");
                b.HasKey(r => r.Id);
                b.Property(u => u.Id).HasColumnName("ApplicationRoleId");
            });

            modelBuilder.Entity<IdentityUserClaim<string>>(b =>
            {
                b.HasKey(uc => uc.Id);
                b.ToTable("UserClaim");
                b.Property(u => u.Id).HasColumnName("UserClaimId");
                b.Property(u => u.UserId).HasColumnName("UserId");
            });

            modelBuilder.Entity<IdentityUserRole<string>>(b =>
            {
                b.ToTable("UserRole");
                b.HasKey(r => new { r.UserId, r.RoleId });
                b.Property(u => u.UserId).HasColumnName("ApplicationUserId");
                b.Property(u => u.RoleId).HasColumnName("ApplicationRoleId");
            });

            modelBuilder.Entity<UserPasswordHistory>(b =>
            {
                b.HasKey(uc => uc.Id);
                b.ToTable("UserPasswordHistory");
                b.Property(u => u.Id).HasColumnName("UserPasswordHistoryId");
            });

            modelBuilder.Entity<Activity>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("ActivityID");
            });
            modelBuilder.Entity<ActivityRole>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("ActivityRoleID");
            });

            modelBuilder.Entity<Resource>(b =>
            {
                b.ToTable("ApplicationResource");
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("ApplicationResourceId");
            });
            modelBuilder.Entity<ResourceType>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("ResourceTypeID");
            });
            modelBuilder.Entity<RoleRight>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("RoleRightID");
            });
        }
    }
}
