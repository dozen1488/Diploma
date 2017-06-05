using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc;

using Diploma.Controllers;
using Xunit;

namespace Diploma.Test
{
    public class HomeControllerTest
    {
        [Fact]
        public void IndexTest()
        {
            HomeController controller = new HomeController();

            // Act
            LocalRedirectResult result = controller.Index() as LocalRedirectResult;

            // Assert
            Assert.True(result.Url == "/App/index.html");

        }
    }
    public class HomeControllerTest
    {
        [Fact]
        public void IndexTest()
        {
            HomeController controller = new HomeController();

            // Act
            LocalRedirectResult result = controller.Index() as LocalRedirectResult;

            // Assert
            Assert.True(result.Url == "/App/index.html");

        }
    }
    public class HomeControllerTest
    {
        [Fact]
        public void IndexTest()
        {
            HomeController controller = new HomeController();

            // Act
            LocalRedirectResult result = controller.Index() as LocalRedirectResult;

            // Assert
            Assert.True(result.Url == "/App/index.html");

        }
    }
    public class HomeControllerTest
    {
        [Fact]
        public void IndexTest()
        {
            HomeController controller = new HomeController();

            // Act
            LocalRedirectResult result = controller.Index() as LocalRedirectResult;

            // Assert
            Assert.True(result.Url == "/App/index.html");

        }
    }
}
