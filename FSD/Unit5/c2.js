// write an express js script to set cookie of submited value and perform task
// 1. create an html file which contains a form with field fname, lname, password and submit button
//  2. once form submited store all this value to the respective cookies on /next page
//  3. then redirect uder to /admin page and clear cookie set for the last name. display remaining set of cookies on this page 
// using post method

express = require('express');
app = express();
cp = require('cookie-parser');

app.use(cp());
app.use(express.static(__dirname,{index:'c2.html'}))
app.use(express.urlencoded({ extended: true }));

app.post('/next', (req, res) => {
    fname = req.body.fname;
    lname = req.body.lname;
    password = req.body.password;

    res.cookie('fname', fname);
    res.cookie('lname', lname);
    res.cookie('password', password);

    res.redirect('/admin');
});


app.get('/admin', (req, res) => {
    res.clearCookie('lname');
    res.send(req.cookies.fname + "<br>" + req.cookies.password + "</br>" + req.cookies.lname)
});

app.listen(3010);
