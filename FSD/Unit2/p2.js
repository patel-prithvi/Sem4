// write node js script that performs the following op using path module the asyc file system module 
// 1. from a given exiting file path extract the dir name using path module
// 2. create the extracted dir inside an exiting folder using fs module
// 3 extract file name from the given path using path module
// 4. create that file inside the newly created dir and write some data into it 
// 5. copy the content of this file to another file 
// 6. delete original file after coping the content
// do all task in asyc
// path: LJ/sample.txt

const fs = require('fs');
var pm= require("path");
path= "LJ/sample.txt"
dir= pm.dirname(path)
console.log("dir name: "+dir);
fs.mkdir(dir,(err) => {if(err) throw err;
    console.log("dir created");
    filename= pm.basename(path)

    console.log("file name: "+filename);
    newpath= dir+"/"+filename;
    fs.writeFile(newpath, "Sample data", (err) => {if(err) throw err;
        console.log("file created");
        fs.copyFile(newpath, dir+'/temp.txt', (err)=>{ if(err){throw err}
            console.log("file copied")
            fs.unlink(newpath, (err) => {
                if (err) throw err;
                console.log('File deleted');
            });
        });
    });
});
