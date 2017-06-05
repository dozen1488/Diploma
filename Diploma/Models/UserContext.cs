using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.ObjectModel;

using Microsoft.EntityFrameworkCore;

namespace Diploma.Models
{
    public class UserContext : DbContext
    {

        public DbSet<User> Users { get; set; }
        public UserContext(DbContextOptions<UserContext> options)
            : base(options)
        {
        }
    }
    


}
