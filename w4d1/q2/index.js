const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.use(express.urlencoded()); // to support URL-encoded bodies
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(session({secret: 'n0tc0mm0nS4lt!#'}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

const getCSS = () => {
    const date_ob = new Date();
    const hour = date_ob.getHours();
    return (hour > 6 && hour <= 18) ? '/css/day.css' : '/css/night.css';
};

app.get('/', (req, res) => {
    const cssFile = getCSS();
    res.render('form', {'cssFile': cssFile});
});

app.post('/result', (req, res) => {
    const name = req.body.name ? req.body.name : 'person';
    const age = req.body.age ? req.body.age : 'unknown';

    req.session.person = {
        name: name,
        age: age
    }

    res.redirect(303, `/output`);
});

app.get('/output', (req, res) => {
    const person = req.session.person;
    res.send(`Welcome ${person.name} - age ${person.age}`);
})

app.listen(3000);
