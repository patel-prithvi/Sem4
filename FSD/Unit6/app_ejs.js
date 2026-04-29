express=require('express')
app= express()

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('first',{name:"Raj"})
})
app.listen(3800)
// ejs tags
// <% %> - scripted tag(control flow)
// <%= %> - text only(HTML escaped)
// <%- %> - real HTML (unescaped HTMl)
// <%# %> - comment
// <%% %> - print literal 