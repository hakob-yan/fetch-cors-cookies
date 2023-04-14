const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.redirect('/index.html')
});

app.get('/set', (req, res) => {
    res.json({name:"John"})
});
app.get('/delete/:key', (req, res) => {
});

app.get('/:name', (req, res) => {
});




app.listen(3000);
