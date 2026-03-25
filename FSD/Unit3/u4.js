// write node js script to print query string of url using callback
// we are writing query string in file
var fs= require("fs");
u= require("url");
process.noDeprecation=true;
var addr= "http://localhost:8080/default.html?name=xyz&age=30"
var q = u.parse(addr,false)
console.log(q);
fs.writeFile("u4.txt", q.query , (err)=>{ if (err) throw err;
    console.log("file created");
})