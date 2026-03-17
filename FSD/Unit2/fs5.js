// try yourself - create json object which contains array of objects calculate perimeter of square and perimeter
//  of cicle by using side value and diameter value respectively 

// write a node script to copy content of one file to another file data should be fetch from source.txt and 
// copy into destination.txt at the end read data from destination file perform this all task asynchronously

var fs= require("fs");
fs.writeFile("source.txt", "Good Morning", (err)=>{ 
    if (err) throw err;
    console.log("source file created");
    fs.readFile("source.txt", "utf-8", 
        (err,data)=>{if(err) throw err;
            console.log("Data from source "+data);
            fs.writeFile("destination.txt", data, (err)=> {if(err) throw err; 
                console.log("Data copied in destination.txt")
                fs.readFile("destination.txt", "utf-8", (err, data)=>{
                    if(err) throw err;
                    console.log("content from destination "+ data)
                })
            })
        })
    })