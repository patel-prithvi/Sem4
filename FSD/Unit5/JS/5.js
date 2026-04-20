express= require('express')
app = express()
path= require('path')

csspath= path.join(__dirname,"../CSS")
htmlpath= path.join(__dirname,"../HTML")
imgpath= path.join(__dirname,"../Image")

app.use(express.static(csspath))
app.use(express.static(htmlpath,{index:'5.html'}))
app.use(express.static(imgpath))
app.listen(5001,()=> console.log("started"))
