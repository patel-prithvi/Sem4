const express=require("express")
app=express()
student={name:'LJU',age:18}
app.get('/',(req,res)=>{
    // res.write(JSON.stringify(student))
    // res.send()
    // or
    // res.send(student)
    // or
    res.json(student)
})
app.listen(6007)