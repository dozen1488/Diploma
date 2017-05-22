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


        [Authorize]
        [HttpGet("{siteName}/images/{imageName}")]
        public IActionResult getImage(string siteName, string imageName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            try
            {
                var stream = user.getImage(siteName, imageName);
                return File(stream, "application/octet-stream");
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpDelete("{siteName}/images/{imageName}")]
        public IActionResult deleteImage(string siteName, string imageName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            try
            {
                var stream = user.deleteImage(siteName, imageName);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpPost("{siteName}/images")]
        public IActionResult uploadImage(IFormFile uploadedFile, string siteName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            try
            {
                user.uploadImage(siteName, uploadedFile);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpGet("{siteName}/images")]
        public IEnumerable<string> getImages(string siteName)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
            return user.getImages(siteName);
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
                var stream = user.getSitePage(siteName, pageName);
                return File(stream, "application/octet-stream");
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
        
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

        [HttpPut("{siteName}/{pageName}")]
        [Authorize]
        public IActionResult putPage(string siteName, string pageName)
        {
            if (siteName == "") return BadRequest();
            else
            {
                User user = db.Users.FirstOrDefault(u => u.Email == User.Identity.Name);
                try {
                    user.writeSitePage(siteName, pageName, this.Request.Body);
                    return Ok();
                }
                catch (Exception ex) {
                    return BadRequest();
                }
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