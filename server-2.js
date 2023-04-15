const path = require('path');
const express = require('express');
const cookieParser= require('cookie-parser')

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())


app.get('/set', (req, res) => {  
    console.log(req.url);
    res.set('Access-Control-Allow-Origin',req.headers.origin);    
    res.set('Access-Control-Allow-Credentials',true);
    res.cookie('name','yolka54564ffd',{maxAge:60*60,sameSite:'None',secure:true})
    res.json({name:"John"})
});
app.get('/only', (req, res) => {
    res.set('Access-Control-Allow-Origin',req.headers.origin)
    res.set('Access-Control-Allow-Credentials',true)

    res.json({name:"only"})
});




app.listen(5000);
