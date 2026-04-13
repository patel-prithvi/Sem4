const express=require("express")
app=express()
student={u1:[{name:'LJU', id:2},{name:'LJU1', id:3},{name:'LJU2', id:4}]}
app.get('/student',(req,res)=>{
    res.set("content-type","text/html")
    res.write(`<center><h2>Student List</h2>
                <table border='1'>
                <thead>
                <tr>
                <th>Name</th>
                <th>ID</th>
                </tr>
                </thead>`)
    for(i of student.u1){
        res.write('<tr><td>'+i.name+'</td>')
        res.write('<td>'+i.id+'</td></tr>')
    }
    res.write('</table></center>')
    res.send()
})
app.listen(3025)