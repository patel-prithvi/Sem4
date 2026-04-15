// create a web server that accepts a get request with a dynamic user id in the url also accept additional data name and age using query
// parameters extracts id from route parameters name and age from query string. return a json response containing all receieved data
const express =require('express')
app= express()
app.get('/user/:id',(req,res)=>{
    userid=req.params.id
    name1=req.query.name
    age=req.query.age
    res.json({id:userid, name:name1, age:age})
})
app.listen(3005,()=>{
    console.log('running');
})