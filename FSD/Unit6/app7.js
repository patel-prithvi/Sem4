// develop a web application using express and ejs that allows user to enter sudents name and marks through a form after submission 
// the application should display the enter details and determine the result if the marks are 9 or above. 
// show pass a green color else show fail in red color 
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('form'));

app.post('/submit', (req, res) => {
    name1 = req.body.name;
    marks= req.body.marks;
    res.render('result', { name1,marks });
});

app.listen(3000);
