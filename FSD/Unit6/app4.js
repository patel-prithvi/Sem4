express=require('express')
app= express()

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('fourth')
})
app.listen(3800)