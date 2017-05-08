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
        [Authorize]
        public IEnumerable<string> Get()
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            return user.getTemplates();
        }

        // GET api/values/5
        [HttpGet("{templateName}")]
        [Authorize]
        public IActionResult Get(string templateName)
        {
            if (templateName == "") return BadRequest();
            try
            {
                User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                var stream = user.getTemplate(templateName);
                return File(stream, "application/octet-stream"); // FileStreamResult
            } catch (Exception ex)
            {
                return BadRequest();
            }
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
        [HttpPut("{templateName}")]
        [Authorize]
        public IActionResult Put(string templateName, [FromBody]string templateText)
        {
            if (templateName == "") return Ok();
            else
            {
                User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                if (user.writeTemplate(templateName, templateText) != "")
                    return Ok();
                else
                    return BadRequest();
            }
        }

        // DELETE api/values/5
        [HttpDelete("{templateName}")]
        [Authorize]
        public IActionResult Delete(string templateName)
        {
            if (templateName == "") return Ok();
            else
            {
                User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                if (user.deleteTemplate(templateName) != "")
                    return Ok();
                else
                    return BadRequest();
            }
        }
    }
}
