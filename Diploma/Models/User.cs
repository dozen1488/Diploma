using System;
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
    }

    public class LoginModel
    {
        public string Email { get; set; }
        
        public string Password { get; set; }
    }
}
