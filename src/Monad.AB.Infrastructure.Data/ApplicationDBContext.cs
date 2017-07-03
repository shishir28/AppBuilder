using Monad.AB.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Monad.AB.Domain.Entities.Identity;
namespace Monad.AB.Infrastructure.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ControlType>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("ControlTypeID");
            });
            modelBuilder.Entity<FieldType>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("FieldTypeID");
            });
          
            modelBuilder.Entity<FormField>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("FormFieldID");
            });

            modelBuilder.Entity<Form>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("FormID");
            });
            modelBuilder.Entity<FormView>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("FormViewID");
            });
            modelBuilder.Entity<FormFieldView>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("FormFieldViewID");
            });
            modelBuilder.Entity<FormViewType>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("FormViewTypeID");
            });
            modelBuilder.Entity<Project>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("ProjectID");
                b.Ignore(u => u.WebServerConfiguration);
                b.Ignore(u => u.DatabaseConfiguration);
            });
           
            modelBuilder.Entity<DatabaseConfiguration>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("DatabaseConfigurationID");
            });
            modelBuilder.Entity<WebAppConfiguration>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("WebAppConfigurationID");
            });

            modelBuilder.Entity<ProjectPublishStatus>(b =>
            {
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("ProjectPublishStatusID");
            });

            modelBuilder.Entity<UserProfile>(b =>
            {
                b.ToTable("User");
                b.HasKey(u => u.Id);
                b.Property(u => u.Id).HasColumnName("UserId");
            });

            base.OnModelCreating(modelBuilder);
        }

    }
}
