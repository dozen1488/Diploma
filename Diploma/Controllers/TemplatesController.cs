using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Authorization;

using Diploma.Models;

namespace Diploma.Controllers
{
    [Route("api/[controller]")]
    public class TemplatesController : Controller
    {
        private UserContext db;
        public TemplatesController(UserContext context)
        {
            db = context;
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost("{templateName}")]
        [Authorize]
        public string Post(string templateName)
        {
            if (templateName == "") return "Error";
            else
            {
                User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                return user.createTemplate(templateName);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [Authorize]
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
