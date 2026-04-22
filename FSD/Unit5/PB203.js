// Write express js script to perform tasks as asked below. 
// 1. Create one HTML file which contains two number type input 
// fields, one dropdown which contains options to select like (addition, 
// subtraction, multiplication, division) and one submit button. 
// 2. The input fields must contain the value greater than 0 else it will 
// give a message “Please enter the valid number”. Also, user must 
// select any type of formula from the dropdown else give a message 
// “You have not selected any formula”. (Message will be displayed on 
// “/calc” page.) 
// 3. If one formula is selected and numbers are entered then Both 
// numbers should be stored in cookies which expires in 50 seconds. 
// Respective calculations will be performed on the page “/calc”.

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname,{index:'PB203.html'}))

app.post('/calc', (req, res) => {
    n1 = parseFloat(req.body.num1);
    n2 = parseFloat(req.body.num2);
    formula = req.body.formula;

    if (n1 <= 0 || n2 <= 0) {
        return res.send('<h2>Please enter the valid number</h2>');
    }

    res.cookie('num1', n1, { maxAge: 50000 });
    res.cookie('num2', n2, { maxAge: 50000 });

    let result = 0;
    if (formula === 'add') result = n1 + n2;
    else if (formula === 'sub') result = n1 - n2;
    else if (formula === 'mul') result = n1 * n2;
    else if (formula === 'div') result = n1 / n2;
    else return res.send('<h2>You have not selected any formula</h2>');

    res.send(`<h2>Result: ${result}</h2><p>Numbers saved in cookies for 50 seconds.</p>`);
});

app.listen(3000);
