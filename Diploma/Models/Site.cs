using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Diploma.Models
{
    public class Site
    {
        private int Id;

        public Site(int userId)
        {
            Id = userId;
        }
        public string createSite(string siteName)
        {
            var currentDir = Directory.GetCurrentDirectory() + "/usersFiles/" + Id + "/sites/" + siteName;
            Directory.CreateDirectory(currentDir);
            Directory.CreateDirectory(currentDir + "/images");
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

}
