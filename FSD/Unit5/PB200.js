// PB 200 : You have been assigned to develop a user feedback form for a website
// using Express.js and cookies. Implement the following requirements:
//  Process a form with the following fields: Name, Email , Message , Rating
// (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user
// submits the form, store their feedback information (name, email, message,
// and rating) in a cookie named "feedback" that expires in 10 seconds.
// Display a confirmation message to the user after successfully submitting the
// form & Create a link to display the feedback details stored in the "feedback"
// cookie. When the user click to the link, retrieve the feedback information
// from the cookie and display it on the page also include a link on the
// feedback details page to Logout. When the user clicks the link, user
// redirected to home page. Make app.js file use get method in express js. No
// need to write html file having form elements.
// After 10 seconds it will give message "no feedback available" message to user

const express = require('express');
const cp = require('cookie-parser');
const app = express();
app.use(cp());

app.use(express.static(__dirname,{index:'PB200.html'}))
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    fname = req.body.name;
    email = req.body.email;
    message = req.body.message;
    rating = req.body.rating;

    feedbackData = {
        name: fname,
        email: email,
        message: message,
        rating: rating
    };

    res.cookie('feedback', feedbackData, { maxAge: 10000 });

    res.send(`
        <h2>Feedback Submitted Successfully!</h2>
        <p>Your details have been saved for 10 seconds.</p>
        <a href="/view-feedback">Display feedback details</a>
    `);
});

app.get('/view-feedback', (req, res) => {
    feedback = req.cookies.feedback;

    if (feedback) {
        res.send(`
            <h2>Feedback Details</h2>
            <p><strong>Name:</strong> ${feedback.name}</p>
            <p><strong>Email:</strong> ${feedback.email}</p>
            <p><strong>Message:</strong> ${feedback.message}</p>
            <p><strong>Rating:</strong> ${feedback.rating}</p>
            <br>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send('<h2>No feedback available</h2><p><a href="/">Back to Home</a></p>');
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('feedback');
    res.redirect('/');
});

app.listen(3010);
