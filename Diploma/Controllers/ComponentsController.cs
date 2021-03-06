using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Diploma.Models;
using System.Text;

namespace Diploma.Controllers
{
    [Produces("application/json")]
    [Route("api/Components")]
    public class ComponentsController : Controller
    {
        private UserContext db;
        public ComponentsController(UserContext context)
        {
            db = context;
        }
        // GET api/values
        [HttpGet]
        [Authorize]
        public IEnumerable<string> Get()
        {
            //User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            User user = new User{Id = 7, Email = "new@u", Password = "new@u"};
            return user.getComponents();
        }

        // GET api/values/5
        [HttpGet("{componentName}")]
        [Authorize]
        public IActionResult Get(string componentName)
        {
            if (componentName == "") return BadRequest();
            try
            {
                //User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                User user = new User{Id = 7, Email = "new@u", Password = "new@u"};
                var stream = user.getComponent(componentName);
                return File(stream, "application/octet-stream"); // FileStreamResult
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        // POST api/values
        [HttpPost("{componentName}")]
        [Authorize]
        public string Post(string componentName)
        {
            if (componentName == "") return "Error";
            else
            {
                //User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                User user = new User{Id = 7, Email = "new@u", Password = "new@u"};
                return user.createComponent(componentName);
            }
        }

        // PUT api/values/5
        [HttpPut("{componentName}")]
        [Authorize]
        public IActionResult Put(string componentName)
        {
            if (componentName == "") return Ok();
            else
            {
                //User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                User user = new User{Id = 7, Email = "new@u", Password = "new@u"};
                try
                {
                    user.writeComponent(componentName, this.Request.Body);
                    return Ok();
                }
                catch (Exception ex)
                {
                    return BadRequest();
                }
            }
            
        }

        // DELETE api/values/5
        [HttpDelete("{componentName}")]
        [Authorize]
        public IActionResult Delete(string componentName)
        {
            if (componentName == "") return Ok();
            else
            {
                //User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                User user = new User{Id = 7, Email = "new@u", Password = "new@u"};
                if (user.deleteComponent(componentName) != "")
                    return Ok();
                else
                    return BadRequest();
            }
        }
    }
}