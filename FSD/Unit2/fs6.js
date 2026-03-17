// write, copy, read
var fs= require("fs");
fs.writeFile("source.txt", "Good Morning", (err)=>{ 
    if (err) throw err;
    console.log("source file created");
    fs.copyFile("source.txt", "destination.txt", (err)=>{ if(err){throw err}
        console.log("Data copied")
        fs.readFile("destination.txt", "utf-8", (err, data)=>{
            if(err) throw err;
            console.log("content from destination "+ data)
        })
    })
})