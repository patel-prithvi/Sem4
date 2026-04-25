// write an express js code in which rest api is created for object named data which contains name, id, branch, city and contect property 
// 1. on api page it should display all content
// 2. upon passing id on browser url it should display the content having that id(localhost:7899/api/101)
// 3. upon passng branch on browser url it should display the content having that branch(localhost:7899/api/branch/it)

expr=require('express')
router=expr.Router()
data = [
    { id: 101, name: "ABC", branch: "CSE", city: "Surat", contact: 1234567891 },
    { id: 102, name: "BCD", branch: "CE", city: "Ahd", contact: 6789012345 },
    { id: 103, name: "XYZ", branch: "CSE", city: "Baroda", contact: 9999999999 },
    { id: 103, name: "PQR", branch: "IT", city: "Ahd", contact: 9898989898 },
    { id: 103, name: "ABC", branch: "CSE", city: "Rajkot", contact: 9797979797 },
    { id: 103, name: "ABC", branch: "IT", city: "Surat", contact: 9696969696 },
];

router.get('/',(req,res)=>{
    res.set('content-type','text/html')
    for(i of data){
        res.write('<h3>ID:'+i.id+' Name:'+i.name+' Branch:'+i.branch+' Contact:'+i.contact+' City:'+i.city+'</h3>')
    }
    res.send()
})

router.get('/:id',(req,res)=>{
    var current_data=data.filter((i1)=>i1.id==req.params.id)
    if(current_data.length>0){
        res.send(current_data)
    }
    else{
        res.send("Not Found")
    }
})

router.get('/branch/:branch',(req,res)=>{
    var cd=data.filter((b)=>b.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(cd.length>0){
        res.send(cd)
    }
    else{
        res.send("Not Found")
    }
})

router.get('/city/:city',(req,res)=>{
    var cd=data.filter((b)=>b.city.toLowerCase()==req.params.city.toLowerCase())
    if(cd.length>0){
        res.send(cd)
    }
    else{
        res.send("Not Found")
    }
})
module.exports=router;