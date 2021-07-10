const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded()); // to support URL-encoded bodies

// NOTE: code used for testing
// let nextId = 1;
let products = [{id: 0, name: 'Test product', price: 12, quantity: 2}];

app.get('/', (req, res) => {
    res.redirect(303, '/cart');
});

app.get('/cart', (req, res) => {
    res.render('shoppingcart', { products: products });
});

app.post('/addToCart', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let quantity = req.body.qty;

    // NOTE: code used for testing
    // products.push({
    //     id: nextId++,
    //     name: name,
    //     price: price,
    //     quantity: quantity
    // });

    res.redirect(303, '/cart');
});

app.get('/product', (req, res) => {
    res.render('product', {
        name: req.params.name || '',
        price: req.params.price || 0,
        quantity: req.params.quantity || 0
    });
});

app.listen(3000);
