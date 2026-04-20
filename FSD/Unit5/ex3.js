// write express js to perform following task 
// 1. create 1 html file with contains 2 number type field, dropdown which contains options like select, addition, sub, mul, div 
// and submit button 
// 2. the input field must contain the value greater than 0 else it will give a msg 'Pls enter valid number'. also user must select any of 
// the formula from the dropdown else give a msg 'you have not selected any formula'. msg wil be display on calc page
// 3. if one formula is selected and number are entered then respective calculation will perform on calc page use get method

express = require("express")
app = express()
app.use(express.static(__dirname,{index:'ex3.html'}))
app.get('/calc', function(req,res){
    n1 = parseInt(req.query.num1)
    n2 = parseInt(req.query.num2)
    op= req.query.ope
    if (!n1 || !n2 || n1 <= 0 || n2 <= 0) {
        return res.send("<h3>Pls enter valid number</h3>");
    }

    let result;
    if (op === "add") result = n1 + n2;
    else if (op === "sub") result = n1 - n2;
    else if (op === "mul") result = n1 * n2;
    else if (op === "div") result = n1 / n2;
    else return res.send("<h3>You have not selected any formula</h3>")
    res.send(`The result of ${op} is: ${result}`);
})
app.listen(3035)
