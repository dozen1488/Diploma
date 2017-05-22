using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Diploma.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace UnitTestProject
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            HomeController testController = new HomeController();

            ActionResult result = testController.Index() as LocalRedirectResult;

            Assert.AreEqual(new LocalRedirectResult("/App/index.html"), result);
        }
    }
}
