// Develop a web application using express and ejs to accept marks of T1,T2,T3,T4 each out of 25. Through a form using post method after submission display
// all entered marks in a tabular format. Along with the total marks and determine the result. If the total is 35 or more display pass in green color
// o/w fail in red color
express = require('express');
app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('app8'));

app.post('/display', (req, res) => {
    t1 = req.body.t1;
    t2 = req.body.t2;
    t3 = req.body.t3;
    t4 = req.body.t4;
    total = Number(t1) + Number(t2) + Number(t3) + Number(t4);
    res.render('table', { t1, t2, t3, t4, total });
});

app.listen(3000);
// 4,5,6 - 5,10,10
// mcq - 10
