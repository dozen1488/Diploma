﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Diploma.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public bool createUserFolder ()
        {
            try
            {
                var currentDir = Directory.GetCurrentDirectory();
                Directory.CreateDirectory(currentDir + "/usersFiles/" + Id);
                Directory.CreateDirectory(currentDir + "/usersFiles/" + Id + "/templates");
                Directory.CreateDirectory(currentDir + "/usersFiles/" + Id + "/components");
                Directory.CreateDirectory(currentDir + "/usersFiles/" + Id + "/sites");
                return true;
            } catch (Exception ex)
            {
                return false;
            }
        } 
        public bool deleteUserFolder ()
        {
            try
            {
                Directory.Delete(Directory.GetCurrentDirectory() + "/usersFiles/" + Id);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
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
        public string writeTemplate(string templateName, string templateText)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/templates/" + templateName + ".html";
            if (!File.Exists(filepath)) return "";
            else
            {
                File.WriteAllText(filepath, templateText);
                return templateName;
            }
        }
        public string[] getTemplates()
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/templates";
            return Directory.GetFiles(filepath, "*.html")
                .Select(Path.GetFileNameWithoutExtension)
                .ToArray();
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
        public string writeComponent(string componentName, string componentText)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/components/" + componentName + ".html";
            if (!File.Exists(filepath)) return "";
            else
            {
                File.WriteAllText(filepath, componentText);
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

        public string createSite(string siteName)
        {
            return siteName;
        }

        public string deleteSite(string siteName)
        {
            return siteName;
        }
    }

    public class LoginModel
    {
        public string Email { get; set; }
        
        public string Password { get; set; }
    }
}
