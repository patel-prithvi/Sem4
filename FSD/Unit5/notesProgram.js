// Write express js script to perform following tasks.
// 1. Create one html file which contains one text field for name, email field and checkbox for subscription.
// Html file will be loaded on home page. Email and name fields are required fields.
// 2. On login page welcome user and email id data should be printed.
// a. If user checked the subscription then “Thank you for the subscription” message will be printed
// and “logout” link will be displayed under the message. If user clicks logout link then he/she will
// be redirected to the home page.
// b. If user has not opted for the subscription then “You can subscribe to get daily updates” message
// will be printed and “subscribe” link will be displayed under the message.
// c. If user clicks subscribe link then he/she will be redirected to the subscription page. In this page
// “Thank you for the subscription” message will be printed and “logout” link will be displayed
// under the message. If user clicks logout link then he/she will be redirected to the home page.
// Use concept of the middleware and you can use any of http methods(get/post).

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const validateInputs = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.send('<h2>Error: Name and Email are required!</h2><br><a href="/">Go Back</a>');
    }
    next();
};

app.use(express.static(__dirname,{index:'notesProgram.html'}))

app.post('/login', validateInputs, (req, res) => {
    name1 = req.body.name;
    email = req.body.email;
    subscription = req.body.subscription;

    let responseHTML = `
        <h2>Welcome, ${name1}!</h2>
        <p><strong>Email:</strong> ${email}</p>
    `;

    if (subscription === 'true') {
        responseHTML += `
            <p>Thank you for the subscription</p>
            <a href="/">Logout</a>
        `;
    } 
    else {
        responseHTML += `
            <p>You can subscribe to get daily updates</p>
            <a href="/subscribe">Subscribe</a>
        `;
    }

    res.send(responseHTML);
});

app.get('/subscribe', (req, res) => {
    res.send(`
        <p>Thank you for the subscription</p>
        <br>
        <a href="/">Logout</a>
    `);
});

app.listen(3010);
