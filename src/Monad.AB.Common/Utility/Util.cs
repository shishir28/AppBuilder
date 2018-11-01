using Monad.AB.Common.Utility.Formatter;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System;

namespace Monad.AB.Common.Utility
{
    public class AppSettings
    {
        public string SiteTitle { get; set; }
        public string GeneratedCodePath { get; set; }
        public string TemplatePath { get; set; }
		public string ZipPath { get; set; }
        public string ImagePath { get; set; }
        public string BuildTempPath { get; set; }
        public string DeploymentPath { get; set; }
        public string TokenAudience { get; set; }
        public string TokenIssuer { get; set; }
    }

    public static class Util
    {
        public static string GenerateGUID()
        {
            return Guid.NewGuid().ToString();
        }

        public static string ToCamelCase(this string theString)
        {
            if (string.IsNullOrWhiteSpace(theString)) return theString;
            if (theString.Length < 2) return theString.ToLower();
            string[] words = theString.Split(new char[] { },StringSplitOptions.RemoveEmptyEntries);

            string result = "";
            foreach (string word in words)
            {
                result += word.Substring(0, 1).ToLower() + word.Substring(1);
            }
            return result;
        }

        public static string RemoveEmptyLines(this string theString)
        {
            return Regex.Replace(theString, @"^\s+$[\r\n]*", "", RegexOptions.Multiline);
        }

        public static void DirectoryCopy(string sourceDirName, string destDirName, bool excludeFileOnTop, bool copySubDirs)
        {
            //Shishir this is temporary source code . It may not work om non windows need to check
            DirectoryInfo dir = new DirectoryInfo(sourceDirName);
            DirectoryInfo[] dirs = dir.GetDirectories();

            if (!dir.Exists)
            {
                throw new DirectoryNotFoundException( "Source directory does not exist or could not be found: " + sourceDirName);
            }

            // If the destination directory doesn't exist, create it. 
            if (!Directory.Exists(destDirName))
                Directory.CreateDirectory(destDirName);

            // Get the files in the directory and copy them to the new location.
            if (!excludeFileOnTop)
            {
                FileInfo[] files = dir.GetFiles();
                foreach (FileInfo file in files.Where(x=>!x.Name.StartsWith("_dnc.")))
                {
                    string temppath = Path.Combine(destDirName, file.Name);
                    file.CopyTo(temppath, true);
                }
            }

            // If copying subdirectories, copy them and their contents to new location. 
            if (copySubDirs)
            {
                foreach (DirectoryInfo subdir in dirs)
                {
                    string temppath = Path.Combine(destDirName, subdir.Name);
                    DirectoryCopy(subdir.FullName, temppath, false, copySubDirs);
                }
            }
        }

        public static IDictionary<string, string> GetFieldTypeToSQLDataTypeMapping()
        {
            var columnTypeMapping = new Dictionary<string, string>
            {
                { "Integer","int"},
                { "Guid","uniqueidentifier"},
                { "Boolean","bit"},
                { "String","nvarchar (max)"},
                { "DateTime","date"},
                { "Number","numeric(10,2)"}
            };
            return columnTypeMapping;
        }
        public static IDictionary<string, string> GetFieldTypeToNETDataTypeMapping()
        {
            var columnTypeMapping = new Dictionary<string, string>
            {
                { "Integer","int"},
                { "Boolean","bool"},
                { "String","string"},
                { "DateTime","DateTime"},
                { "Number","Decimal"}
            };
            return columnTypeMapping;
        }

        public static IDictionary<string, string> GetFieldTypeToHtmlInputTypeMapping()
        {
            // Shishir More mapping can be added 
            var columnTypeMapping = new Dictionary<string, string>
            {
                { "Integer",@"  type = ""Number"" min=""0"""},
                { "Boolean", @"  type = ""checkbox""" },
                { "String",@"  type = ""text"""},
                { "DateTime",@"  type = ""date"""},
                { "Number",@"  type = ""Number"" step=""0.01"" "}
            };
            return columnTypeMapping;
        }

    }

    public enum FileType
    {
        Text,
        XML,
        CSharp,
        Html,
        JavaScript,
        SQL
    }

    public class FileWrapper
    {
        public static void WriteAllText(string path, string contents, FileType fileType )
        {
            if (fileType == FileType.CSharp)
            {
                //MSBuildWorkspace workspace = MSBuildWorkspace.Create();
                File.WriteAllText(path, contents);
            }
            else if (fileType == FileType.JavaScript)
            {
                var beautifier = new JavaScriptFormatter();
                File.WriteAllText(path, beautifier.Format(contents));
            }
            else
            {
                File.WriteAllText(path, contents);
            }
            
        }
        public static string ReadAllText(string path, FileType fileType = FileType.Text)
        {
            return File.ReadAllText(path);
        }
    }
}
