const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(session({secret: 'n0tc0mm0nS4lt!#'}));
app.use(express.urlencoded()); // to support URL-encoded bodies

// Simulated DB
let productsDB = {
    0: {
        name: 'apple',
        price: 1
    },
    1: {
        name: 'gummy bear x10',
        price: 2
    },
    2: {
        name: 'juice',
        price: 3
    }
};

app.get('/', (req, res) => {
    res.redirect(303, '/cart');
});

app.get('/cart', (req, res) => {
    const products = req.session.cart ? req.session.cart : {};
    res.render('shoppingcart', { products: products });
});

app.post('/addToCart', (req, res) => {
    const cart = req.session.cart ? req.session.cart : {};
    let pid = parseInt(req.body.id);
    let name = req.body.name;
    let price = parseInt(req.body.price);
    let quantity = parseInt(req.body.qty);

    if (!cart[pid]) {
        cart[pid] = {
            quantity: 0
        };
    }

    cart[pid].name = name;
    cart[pid].price = price;
    cart[pid].quantity += quantity;

    req.session.cart = cart;

    res.redirect(303, '/cart');
});

app.get('/product', (req, res) => {
    if (!(req.query.pid in productsDB)) {
        // TODO: Proper error page
        res.send('Error: product not in store. <a href=\'/\'>Back to cart</a>');
    }
    const product = productsDB[req.query.pid];
    res.render('product', {
        id: req.query.pid,
        name: product.name,
        price: product.price
    });
});

app.listen(3000);
