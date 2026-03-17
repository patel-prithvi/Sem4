// 1st - write node js script and json to perform below task. make dir then write file then unlink and remove dir in asyn
// write node js script and json to perform below task. make dir then write file then delete dir without delete file
const fs = require('fs');

fs.mkdir('my_folder', (err) => {
    if (err) throw err;
    console.log('Directory my_folder created.');

    fs.writeFile('my_folder/wt.txt', "Hello Node.js", (err) => {
        if (err) throw err;
        console.log(`File wt.txt written.`);

        fs.unlink('my_folder/wt.txt', (err) => {
            if (err) throw err;
            console.log(`File wt.txt deleted.`);

            // 4. Remove the Directory
            fs.rmdir('my_folder', (err) => {
                if (err) throw err;
                console.log(`Directory 'my_folder' removed.`);
            });
        });
    });
});
