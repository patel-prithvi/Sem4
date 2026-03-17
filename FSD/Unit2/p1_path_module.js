const { log } = require("console");
var pm= require("path");
path1= pm.dirname("D:/LJ/fsd.html")
console.log(path1);
path2= pm.basename("D:/LJ/fsd.html")
console.log(path2);
ext= pm.extname("D:/LJ/fsd.html")
console.log(ext);
if(ext == '.html') console.log("this is html file");
else console.log("this is other document");
path3= pm.parse("D:/LJ/fsd.html")
console.log(path3);