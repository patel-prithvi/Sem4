express=require('express')
app= express()
path= require('path')

app.set('view engine','ejs')
app.set('views',path.join(__dirname))
app.get('/',(req,res)=>{
    res.render('fifth',{name:"Ram"})
})
app.listen(3800)