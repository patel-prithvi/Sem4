// create basic web application that display a form on home page to enter user name and marks send the form data to server using post req 
// the server shold read submited name and marks from req body finally display msg that user 1 get 
const express=require("express")
app=express()
app.use(express.urlencoded({extended:true}))
app.get('/home',(req,res)=>{
    res.send(`<h1>Student Form</h1>
        <form action='/calculate' method='post'>
        name: <input type='text' name='n1'/>
        FSD: <input type='text' name='n2'/>
        Python: <input type='text' name='n3'/>
        DM: <input type='text' name='n4'/>
        <button type='submit'>Calculate</button>
        </form>`);
})
app.post('/calculate',(req,res)=>{
    a=req.body.n1;
    b=req.body.n2;
    c=req.body.n3;
    d=req.body.n4;
    avg=parseInt((a+b+c+d)/4)
    res.write(a)
    res.write("FSD:"+b)
    res.write("Python:"+c)
    res.write("DM:"+d)
    res.write("avg:"+avg)
})
app.listen(6061,()=>{
    console.log('Running')
})