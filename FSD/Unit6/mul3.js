const express = require('express');
const app = express();
const multer = require('multer');

app.use(express.static(__dirname, { index: 'mul2.html' }));

const store = multer.diskStorage({
    destination: 'multi',
    filename: function(req, file, cb) {
        cb(null, file.fieldname+'-'+Date.now()+'.docx');
    }
});

var upload = multer({ storage: store });

app.post('/uploadfile', upload.array('myfile', 5), (req, res) => {
    const files = req.files;
    
    if (files) {
        res.set('content-type','text/html')
        for (i of files) {
            res.write('<h3>File '+i.originalname+' has been uploaded in '+i.destination+' folder</h3>')
        }
        res.send()
    } else {
        res.send('No files were uploaded.');
    }
});

app.listen(7899);