var fs= require("fs");
// fs.mkdirSync("node");
// fs.writeFileSync("node/write.txt", "Be kind")
// fs.appendFileSync("node/write.txt", " to everyone")
// fs.renameSync("node/write.txt", "node/rw.txt")
// fs.unlinkSync("node/rw.txt")
// fs.rmdirSync("node")
data= fs.readFileSync("node/write.txt")
console.log(data);
console.log(data.toString());
data= fs.readFileSync("node/write.txt", "utf-8")
console.log(data);