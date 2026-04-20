// write express script to retrive data using post method and diplay data in json format
const express = require('express');
const app = express();

app.use(express.static(__dirname,{index:'ex4.html'}))
app.use(express.urlencoded({ extended: true }));


app.post('/data', (req, res) => {
    const final = {
        user: req.body.user,  
        city: req.body.city,
    };
    res.json(final);
});

app.listen(3035);
