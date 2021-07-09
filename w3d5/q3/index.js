const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded()); // to support URL-encoded bodies
app.use('/css', express.static(path.join(__dirname, 'css')));

const getCSS = () => {
    const date_ob = new Date();
    const hour = date_ob.getHours();
    return (hour > 6 && hour <= 18) ? '/css/day.css' : '/css/night.css';
};

app.get('/', (req, res) => {
    const cssFile = getCSS();
    const formText = `\
    <!DOCTYPE html>\
    <html lang="en">\
    <head>\
        <meta charset="UTF-8">\
        <meta http-equiv="X-UA-Compatible" content="IE=edge">\
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
        <title>W3D5 - q3</title>\
        <link rel="stylesheet" href="${cssFile}">\
    </head>\
    <body>\
        <form action="/result" method="post">\
            <label for="name">Name</name>\
            <input id="name" name="name" type="text">\
            <label for="age">Age</name>\
            <input id="age" name="age" type="number">\
            <button type="submit">Submit</button>\
        </form>\
    </body>\
    </html>`
    res.send(formText);
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
