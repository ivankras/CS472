const express = require('express');
const app = express();

app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', (req, res) => {
    const returnForm = 
        '<form action="/result" method="post">\
            <label for="name">Name</name>\
            <input id="name" name="name" type="text">\
            <label for="age">Age</name>\
            <input id="age" name="age" type="number">\
            <button type="submit">Submit</button>\
        </form>';
    res.send(returnForm);
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
    res.send(`Welcome ${name} - age ${age}`);
});

app.listen(3000);
