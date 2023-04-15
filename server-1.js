const path = require('path');
const express = require('express');
const cookieParser= require('cookie-parser')

const app = express();
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())


app.get('/set', (req, res) => {
    res.cookie('name','yolka54564ffd',{maxAge:60*60,sameSite:'lax'})
    res.json({name:"John"})
});
app.get('/only', (req, res) => {
    console.log(req.cookies);
    res.json({name:"only"})
});
app.get('/delete/:key', (req, res) => {
});

app.get('/:name', (req, res) => {
});




app.listen(3000);
