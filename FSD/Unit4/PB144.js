// write an express.js script to load an HTML file having username and password and submit button. On clicking submit button. It should 
// jump on "check" page using "POST" method. If username is "admin" , then jump on next middleware to print "welcome… admin" , if 
// username is not "admin" , then stay on same middleware to print "warning msg" in red color.

const express=require("express")
app=express()
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(`<form action="/check" method="POST">
        Username: <input type="text" name="username" required>
        Password: <input type="password" name="password" required>
        <button type="submit">Submit</button>
    </form>`);
});
checkAdmin = (req, res, next) => {
    const { username } = req.body;
    if (username === 'admin') {
        next(); 
    } else {
        res.send(`<h1 style="color: red;">Warning: Unauthorized User! Access Denied.</h1>`);
    }
}
app.post('/check', checkAdmin, (req, res) => {
    res.send(`<h1>Welcome... admin</h1>`);
});
app.listen(3000);