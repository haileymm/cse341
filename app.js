
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.send('<h1>Page not found</h1>')
});


app.use('/', (req, res, next) => {
    console.log('In the middleware again!');
    res.status(404).send('<h1>Hello from Express</h1>');
});

//create a server
app.listen(3000);