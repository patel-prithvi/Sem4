const express=require("express")
app=express()
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`<h1>User Form</h1>
        <form action='/user' method='post'>
        <input type='text' name='n1'/>
        <button type='submit'>Click here</button>
        </form>`);
})
app.post('/user',(req,res)=>{
    a=req.body.n1;
    res.send(a)
})
app.listen(6052,()=>{
    console.log('Running')
})