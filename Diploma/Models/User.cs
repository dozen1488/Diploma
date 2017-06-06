using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Diploma.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public bool createUserFolder()
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
        public bool deleteUserFolder()
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

        public string createSite(string siteName)
        {
            var currentDir = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName;
            Directory.CreateDirectory(currentDir);
            Directory.CreateDirectory(currentDir + "/styles");
            Directory.CreateDirectory(currentDir + "/images");
            Directory.CreateDirectory(currentDir + "/js");
            return siteName;
        }
        public bool deleteSite(string siteName)
        {
            try
            {
                DeleteDirectory(Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public string[] getSites()
        {
            return Directory.GetDirectories(Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites")
                .Select(Path.GetFileName)
                .ToArray();
        }

        public FileStream getImage(string sitename, string imageName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + sitename + "/images/" + imageName;
            if (File.Exists(filepath))
            {
                return File.Open(filepath, FileMode.Open);
            }
            else throw new Exception("no such file");
        }
        public string[] getImages(string siteName)
        {
            var filepaths = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName + "/images";
            return Directory.GetFiles(filepaths)
                .Select(Path.GetFileName)
                .ToArray();
        }
        public string deleteImage(string siteName, string imageName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName + "/images/" + imageName;
            if (!File.Exists(filepath)) return "";
            else
            {
                File.Delete(filepath);
                return "Deleted";
            }
        }
        public void uploadImage(string siteName, IFormFile uploadedFile)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName + "/images/" + uploadedFile.FileName;
            var inputStream = new FileStream(filepath, FileMode.OpenOrCreate);
            uploadedFile.CopyTo(inputStream);
            inputStream.Dispose();
            return;
        }

        public string addPage(string siteName, string pageName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName + "/" + pageName + ".html";
            if (File.Exists(filepath)) return "";
            else
            {
                var fileStream = File.Create(filepath);
                fileStream.Dispose();
                return pageName;
            }
        }
        public string[] getSitePages(string siteName)
        {
            var filepaths = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName;
            return Directory.GetFiles(filepaths, "*.html")
                .Select(Path.GetFileNameWithoutExtension)
                .ToArray();
        }
        public FileStream getSitePage(string siteName, string pageName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName + "/" + pageName + ".html";
            if (File.Exists(filepath))
            {
                return File.Open(filepath, FileMode.Open);
            }
            else throw new Exception("no such file");

        }
        public string writeSitePage(string siteName, string pagename, Stream pageText)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName + "/" + pagename + ".html";
            if (!File.Exists(filepath)) return "";
            else
            {
                var inputStream = new FileStream(filepath, FileMode.Open);
                pageText.CopyTo(inputStream);
                inputStream.Dispose();
                return pagename;
            }
        }
        public string deleteSitePage(string siteName, string pageName)
        {
            var filepath = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName + "/" + pageName + ".html";
            if (!File.Exists(filepath)) return "";
            else
            {
                File.Delete(filepath);
                return "Deleted";
            }
        }
        public static void DeleteDirectory(string target_dir)
        {
            string[] files = Directory.GetFiles(target_dir);
            string[] dirs = Directory.GetDirectories(target_dir);

            foreach (string file in files)
            {
                File.SetAttributes(file, FileAttributes.Normal);
                File.Delete(file);
            }

            foreach (string dir in dirs)
            {
                DeleteDirectory(dir);
            }

            Directory.Delete(target_dir, false);
        }

    }
    public class LoginModel
    {
        public string Email { get; set; }
        
        public string Password { get; set; }
    }
}
