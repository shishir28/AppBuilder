using Microsoft.EntityFrameworkCore;
using Monad.AB.Domain.Entities;
using Monad.AB.Domain.Interfaces;
using System.Linq;

namespace Monad.AB.Infrastructure.Data
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        protected DbSet<T> DbSet;
        private DbContext _dbContext;

        public Repository(DbContext dataContext)
        {
            _dbContext = dataContext;
            DbSet = _dbContext.Set<T>();
        }

        public void Create(T entity)
        {
            DbSet.Add(entity);
            _dbContext.SaveChanges();
        }

        public void Update(T entity)
        {
            DbSet.Update(entity);
            _dbContext.SaveChanges();

        }
        public void Delete(T entity)
        {
            DbSet.Remove(entity);
            _dbContext.SaveChanges();
        }

        public IQueryable<T> GetAll() =>
            DbSet;

        public T GetById(int id) =>
            DbSet.FirstOrDefault(x => x.Id == id);
    }
}
