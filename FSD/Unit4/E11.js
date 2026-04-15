const express=require("express")
app=express()
app.use(express.urlencoded({extended:true}))
app.get('/home',(req,res)=>{
    res.send(`<h1>Student Form</h1>
        <form action='/details' method='post'>
        name: <input type='text' name='n1'/><br>
        age: <input type='number' name='n2'/><br>
        city: <input type='text' name='n3'/><br>
        marks: <input type='number' name='n4'/><br>
        course: <input type='text' name='n5'/><br>
        <button type='submit'>Submit</button>
        </form>`);
})
app.post('/details',(req,res)=>{
    a=req.body.n1
    b=req.body.n2
    c=req.body.n3
    d=req.body.n4
    e=req.body.n5
    res.send('<p>name : '+a+'<br> age : '+b+'<br> city : '+c+'<br> marks : '+d+'<br>course'+e+' </p>')
})
app.listen(6061,()=>{
    console.log('Running')
})