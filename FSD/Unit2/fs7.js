// write node js script to write the text "u are creating" a file to help.txt after that append the text "u are appending that data"
//  to the same help.txt after that read the file and print file content on console after printing 
// copy the text to next.txt file from help.txt at the end print the messang " thank for using my programm"
var fs= require("fs");
fs.writeFile("help.txt", "u are creating", (err)=>{ if (err) throw err;
    fs.appendFile("help.txt", " u are appending that data", (err)=>{ if (err) throw err;
        fs.readFile("help.txt", "utf-8", (err, data)=>{
            if(err) throw err;
            console.log("content from help.txt "+ data)
            fs.copyFile("help.txt", "next.txt", (err)=>{ if(err){throw err}
                console.log("thank for using my programm")
            })
        })
    })
})