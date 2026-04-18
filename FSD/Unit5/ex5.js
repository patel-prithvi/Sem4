//  build an express js app with html form with user name and submit button and use post method on visiting on / show form. on submiting 
// to login page if user name is admin display welcome admin else show please login with admin name and a link back to the form  
express = require('express');
app = express();
app.use(express.static(__dirname,{index:'4.html'}))
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const user = req.body.uname;

    if (user === 'admin') {
        res.send(`<h1>Welcome admin</h1>`);
    } else {
        res.send(`
            <h1>Please login with admin name</h1>
            <a href="/">Back to Form</a>
        `);
    }
});

app.listen(3035);
