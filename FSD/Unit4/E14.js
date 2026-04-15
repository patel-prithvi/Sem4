const express=require("express")
app=express()
const addName=(req,res,next)=> {
    req.name="Siya"; 
    console.log("Name Added");
    next()
}
const addCollage= (req, res, next)=>{
    req.collage="LJU"; 
    console.log("collage Added");
    next()
}
const addMarks= (req, res, next)=>{
    req.total=50+40; 
    console.log("marks Added");
    next()
}
app.get('/student', addName, addCollage, addMarks, (req,res)=>{
    res.send('Name:'+req.name+' collage:'+req.collage+' marks:'+req.total)
})
app.listen(3055)