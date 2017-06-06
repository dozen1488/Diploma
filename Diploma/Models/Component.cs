using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Diploma.Models
{
    public class Component
    {
        private int Id;
        public Component(int userId)
        {
            Id = userId;
        }

        public string createComponent(string componentName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/components/" + componentName + ".html";
            if (File.Exists(filepath)) return "";
            else
            {
                var fileStream = File.Create(filepath);
                fileStream.Dispose();
                return componentName;
            }
        }
        public string deleteComponent(string componentName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/components/" + componentName + ".html";
            if (!File.Exists(filepath)) return "";
            else
            {
                File.Delete(filepath);
                return "Deleted";
            }
        }
        public FileStream getComponent(string componentName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/components/" + componentName + ".html";
            if (File.Exists(filepath))
            {
                return File.Open(filepath, FileMode.Open);
            }
            else throw new Exception("no such file");
        }
        public string writeComponent(string componentName, Stream componentText)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/components/" + componentName + ".html";
            if (!File.Exists(filepath)) return "";
            else
            {
                var inputStream = new FileStream(filepath, FileMode.Open);
                componentText.CopyTo(inputStream);
                inputStream.Dispose();
                return componentName;
            }
        }
        public string[] getComponents()
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/components";
            return Directory.GetFiles(filepath, "*.html")
                .Select(Path.GetFileNameWithoutExtension)
                .ToArray();
        }
    }

}
