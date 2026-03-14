// writing data to file append data to file and then reading the file using callback function 
var fs= require("fs");
fs.writeFile("node/data.txt", "Good Morning", (err)=> {
    if(err){console.log(err);}
    else{
        fs.appendFile("node/data.txt", " to everyone ", (err)=> {
            if(err){console.log(err);}
            else{
                fs.readFile("node/data.txt", "utf-8", (err, data)=>{
                    if(err){console.log(err);}
                    else{
                        console.log(data);
                    }
                })
            }
        })
    }
})