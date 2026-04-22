// Write an express.js script to define 2 pages. 1st page has username 
// and password. Store this username to cookie on 2nd page. Cookie 
// must stay live for 1 day.
express = require('express');
cp = require('cookie-parser');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cp());

app.use(express.static(__dirname,{index:'PB202.html'}))

app.post('/set-cookie', (req, res) => {
    username = req.body.username;
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;


    res.cookie('savedUsername', username, { 
        maxAge: ONE_DAY_MS
    });

    res.send(`
        <h2>Success!</h2>
        <p>Welcome, <strong>${username}</strong>.</p>
        <p>Your username has been stored in a cookie that will remain live for 1 day.</p>
        <br>
    `);
});

app.listen(3010);
