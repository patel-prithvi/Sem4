// write express js using session to display how many times a user visited a website if user is visiting a website for 1st time then 
// display " welcome... thank you for visiting our website" else display the count how many times user visited the website for that 
// perticular session
express = require('express');
app = express();
sess= require('express-session')

app.use(sess({
    secret:'LJU123',
    saveUninitialized:true,
    resave:true
}))

app.get('/',(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style='color:blue'>
            You have visited page
            ${req.session.page_views}
            </h1>`)
    }else{
        req.session.page_views=1
        res.send(`<h1 style='color:green'>
            Welcome! Thank you for vising our website
            </h1>`)
    }
})
app.listen(3010)