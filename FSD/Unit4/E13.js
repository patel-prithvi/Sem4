const express=require("express")
app=express()
app.use(express.urlencoded({extended:true}))
app.get('/home',(req,res)=>{
    res.send(`<h1>Employee details</h1>
        <form action='/details' method='post'>
        name: <input type='text' name='n1'/> <br><br>
        Gender: <input type="radio" name="n2" value="Male" id="m">Male
        <input type="radio" name="n2" value="Female" id="f">Female
        <input type="radio" name="n2" value="other" id="o">Other
        <br><br>
        skills: <input type='checkbox' name='n3' value='Python'/> Python
        <input type='checkbox' name='n3' value='React'/> React
        <input type='checkbox' name='n3' value='Node'/> Node
        <input type='checkbox' name='n3' value='Express'/> Express <br><br>
        Dept: <select name='n4'>
        <option value='CSE'>CSE</option>
        <option value='CST'>CST</option>
        <option value='IT'>IT</option>
        </select><br><br>
        <button type='submit'>submit</button>
        </form>`);
})
app.post('/details',(req,res)=>{
    a=req.body.n1
    b=req.body.n2
    c=req.body.n3
    d=req.body.n4
    res.send(`
        <p>Name: ${a}</p>
        <p>Gender: ${b}</p>
        <p>Skills: ${c}</p>
        <p>Department: ${d}</p>
    `);
})
app.listen(3050,()=>{
    console.log('Running')
})