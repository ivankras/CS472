const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/addCookie', (req, res) => {
    let key = req.body.key;
    let value = req.body.value;

    res.cookie(key, value);

    res.redirect(303, '/');
});

app.listen(3000);
