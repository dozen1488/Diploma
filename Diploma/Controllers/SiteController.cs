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

        [HttpDelete("{siteName}")]
        [Authorize]
        public IActionResult DELETE(string siteName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            try
            {
                user.deleteSite(siteName);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }


        [HttpGet("{siteName}")]
        [Authorize]
        public IEnumerable<string> GetSitePages(string siteName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            return user.getSitePages(siteName);
        }
        
        [Authorize]
        [HttpGet("{siteName}/{pageName}")]
        public IActionResult getPage(string siteName, string pageName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            try
            {
                user.getSitePage(siteName, pageName);
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

        [HttpPut("{siteName}")]
        [Authorize]
        public IActionResult putPage(string siteName, [FromBody]string pageText)
        {
            if (siteName == "") return BadRequest();
            else
            {
                User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                if (user.writeSitePage(siteName, pageText) != "")
                    return Ok();
                else
                    return BadRequest();
            }
        }
        
        [Authorize]
        [HttpDelete("{siteName}/{pageName}")]
        public IActionResult deletePage(string siteName, string pageName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            try
            {
                user.deleteSitePage(siteName, pageName);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

    }
}