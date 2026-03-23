// write node js script to handle event to write data in file, append in file, read data from file and display data in console 

const ee= require("events");
var e= new ee();
var fs= require("fs");

e.on("read", ()=>{
    fs.readFile("sample.txt", "utf-8", (err, data)=>{
        if(err) throw err;
        console.log("content from sample.txt: "+ data)
    })
})
e.on("append", ()=>{
    fs.appendFile("sample.txt", " u are appending that data", (err)=>{ if (err) throw err;
    console.log("appended");
    e.emit("read")
    })
})
e.on("write", ()=>{
    fs.writeFile("sample.txt", "u are creating", (err)=>{ if (err) throw err;
    console.log("written");
    e.emit("append")
    })
})
e.emit("write")