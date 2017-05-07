using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace Diploma
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseWebRoot("wwwroot/publicFiles")
                .UseIISIntegration()
                .UseStartup<Startup>()
                .UseApplicationInsights()
                .Build();
            if (!GenerateDirectories()) throw new Exception("Can't create directories");
            host.Run();
        }

        private static bool GenerateDirectories()
        {
            try
            {
                var currentDir = Directory.GetCurrentDirectory();
                if (!Directory.Exists(currentDir + "/usersFiles"))
                {
                    Directory.CreateDirectory(currentDir + "/usersFiles");
                }
                if (!Directory.Exists(currentDir + "/content"))
                {
                    Directory.CreateDirectory(currentDir + "/content");
                }
                if (!Directory.Exists(currentDir + "/content/components"))
                {
                    Directory.CreateDirectory(currentDir + "/content/components");
                }
                if (!Directory.Exists(currentDir + "/content/templates"))
                {
                    Directory.CreateDirectory(currentDir + "/content/templates");
                }
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
        }
    }
}
