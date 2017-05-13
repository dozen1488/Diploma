using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using Diploma.Models;

namespace Diploma.Controllers
{
    [Produces("application/json")]
    [Route("api/sites")]
    public class SiteController : Controller
    {
        private UserContext db;
        public SiteController(UserContext context)
        {
            db = context;
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<string> Get()
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            return user.getSites();
        }
        
        [HttpPost]
        [Authorize]
        [HttpPost("{siteName}")]
        public IActionResult POST(string siteName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            try
            {
                user.createSite(siteName);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Authorize]
        [HttpPost("{siteName}/{pageName}")]
        public IActionResult addPage(string siteName, string pageName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            try
            {
                user.addPage(siteName, pageName);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}