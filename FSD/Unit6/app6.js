// write an express js application to perform following task
// 1 create an ejs file name contect.ejs that displays a heading contect form and contains a form with 
// i. text input for name
// ii. email input for email
// iii. submit button
// 2. render this ejs file on contect route
// 3. heandel form submission using the post method on submit route
// 4. after form submission display a message on brower - thank you {name}.. we have recieved your mail {mail}.

express = require('express');
app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/contect', (req, res) => {
    res.render('contect');
});
app.post('/submit', (req, res) => {
    name1= req.body.name;
    email=req.body.email
    res.send(`thank you ${name1}.. we have recieved your mail ${email}.`);
});

app.listen(3800);
