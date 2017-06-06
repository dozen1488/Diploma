using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Diploma.Models
{
    public class Template
    {
        private int Id;
        public Template(int userId)
        {
            Id = userId;
        }
        public string createTemplate(string templateName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/templates/" + templateName + ".html";
            if (File.Exists(filepath)) return "";
            else
            {
                var fileStream = File.Create(filepath);
                fileStream.Dispose();
                return templateName;
            }
        }

        public string deleteTemplate(string templateName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/templates/" + templateName + ".html";
            if (!File.Exists(filepath)) return "";
            else
            {
                File.Delete(filepath);
                return "Deleted";
            }
        }
        public FileStream getTemplate(string templateName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/templates/" + templateName + ".html";
            if (File.Exists(filepath))
            {
                return File.Open(filepath, FileMode.Open);
            }
            else throw new Exception("no such file");
        }
        public string writeTemplate(string templateName, Stream templateText)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/templates/" + templateName + ".html";
            if (!File.Exists(filepath)) return "";
            using (var inputStream = new FileStream(filepath, FileMode.Open))
            {
                templateText.CopyTo(inputStream);
            }
            return templateName;
        }
        public string[] getTemplates()
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/templates";
            return Directory.GetFiles(filepath, "*.html")
                .Select(Path.GetFileNameWithoutExtension)
                .ToArray();
        }

    }

}
