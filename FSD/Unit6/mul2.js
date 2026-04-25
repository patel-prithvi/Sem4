// write express js script that accepts multiple files max no 5 to be uploaded using multer midleware and saves the file to sepcific
// diectory multiple
const express = require('express');
const app = express();
const multer = require('multer');

app.use(express.static(__dirname, { index: 'mul2.html' }));

const store = multer.diskStorage({
    destination: 'multiple',
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: store });

app.post('/uploadfile', upload.array('mypic', 5), (req, res) => {
    const files = req.files;
    
    if (files) {
        for (let i = 0; i < 5; i++) {
            res.write('<h1>File '+files[i].originalname+' has been uploaded in '+files[i].destination+' folder</h1>')
        }
        res.send()
    } else {
        res.send('No files were uploaded.');
    }
});

app.listen(7899);
