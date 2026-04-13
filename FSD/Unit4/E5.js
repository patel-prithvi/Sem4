const express=require("express")
app=express()
student={name:'siya',age:20, role:'developer'}
app.get('/home',(req,res)=>{
    res.json(student)
})
app.get('/about',(req,res)=>{
    res.write(student.role+' '+student.name+' is '+student.age+' years old')
    res.send()
})
app.get('/contact',(req,res)=>{
    res.send(student.name)
})
app.listen(6007)