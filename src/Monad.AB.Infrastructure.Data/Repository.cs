using Microsoft.EntityFrameworkCore;
using System.Linq;
using Monad.AB.Domain.Interfaces;
using Monad.AB.Domain.Entities;

namespace Monad.AB.Infrastructure.Data
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        protected DbSet<T> DbSet;
        private CustomDBContext _dbContext;

        public Repository(CustomDBContext dataContext)
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
