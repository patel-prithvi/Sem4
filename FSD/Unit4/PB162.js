// Write an ExpressJS application that creates a login form containing fields for username and password along with a submit button. The 
// form data should be sent to the server using the POST method. Implement an authentication middleware that checks whether the 
// entered username is "admin" and the password is "1234". If the credentials are correct, the application should display the message 
// "Login Successful". Otherwise, it should display "Invalid Credentials".

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h2>Login Form</h2>
        <form action="/login" method="POST">
        Username: <input type="text" name="username" required><br><br>
        Pasword: <input type="password" name="password" required><br><br>
        <button type="submit">Login</button>
        </form>
    `);
});

const authMiddleware = (req, res, next) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '1234') {
        next(); 
    } else {
        res.send("Invalid Credentials"); 
    }
};

app.post('/login', authMiddleware, (req, res) => {
    res.send("Login Successful");
});

app.listen(3000);
