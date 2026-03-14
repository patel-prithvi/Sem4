// write data in file and read data from file and arrange that in asce order
// 50 -1 99 100 20 0 56 78 59
var fs= require("fs");
fs.writeFileSync("node/f1.txt", "50 -1 99 100 20 0 56 78 59")
data= fs.readFileSync("node/f1.txt", "utf-8")
data=data.split(" ")
data=data.sort((a,b)=>a-b)
console.log(data);
fs.writeFileSync("node/f2.txt", JSON.stringify(data))