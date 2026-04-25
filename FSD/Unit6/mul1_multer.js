// write an express js script 
// that accepts single file to be uploaded using the multer midware and saves the file the specific directory called lju
express=require('express')
app=express()
multer = require('multer')
app.use(express.static(__dirname,{index:'mul1_multer.html'}))
store=multer.diskStorage({
    destination:'Lju',
    filname: function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload = multer({storage:store})
app.post('/uploadfile',upload.single('mypic'),(req,res)=>{
    const file= req.file
    if(file){
        res.send('<h1>File '+file.originalname+' has been uploaded in '+file.destination+' folder</h1>')
    }
})
app.listen(7899)