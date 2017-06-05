using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Diploma.Controllers
{
    public class HomeController : Controller
    {
        private IHostingEnvironment hosting;
        public HomeController(IHostingEnvironment hosting)
        {
            this.hosting = hosting;
        }
        public IActionResult Index()
        {
            return LocalRedirect("/App/index.html");
        }
        [Route("uf/{userId}/{sitename}/{path}")]
        public IActionResult getContent(string userId, string sitename, string path)
        {
            return File(new FileStream(hosting.ContentRootPath + "/usersFiles/" + userId + "/sites/" + sitename + "/" + path, FileMode.Open), "text/html");
        }
    }
}