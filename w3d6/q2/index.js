const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "unknown";
    }
    res.render('result', {name: name, age: age});
});

app.listen(3000);
