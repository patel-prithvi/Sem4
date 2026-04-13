// write an express script to define 1 json of 3 objects having properties like comedians name and age sort this object according to age
// if user res sorted name in url then all name along with with age should be printed according to descending order of age.
// also display this sorted values on sort page and display json object on home page
const express=require("express")
app=express()
const comedians = [
    { name: "Jerry Seinfeld", age: 69 },
    { name: "Kevin Hart", age: 44 },
    { name: "Taylor Tomlinson", age: 30 }
];
app.get('/', (req, res) => {
    res.json(comedians);
});
app.get('/sort', (req, res) => {
    res.set("content-type","text/html")
    data=comedians.sort((a,b)=>b.age-a.age)
    for(i of data){
        res.write("<center><h2>"+i.name+"="+i.age+"</h2></center>")
    }
    res.send()
});
app.listen(3045)