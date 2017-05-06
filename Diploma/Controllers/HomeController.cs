using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Diploma.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return LocalRedirect("/index.html");
        }
    }
}