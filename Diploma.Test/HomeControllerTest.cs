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
            Assert.Equal(2, 1);
        }
    }
}
