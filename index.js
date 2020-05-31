const express   = require('express');
const path      = require('path');
const PORT      = process.env.PORT || 3002

const handlebars= require('express-handlebars');

const homeRouter        = require('./routes/home');
const productsRouter    = require('./routes/products');
const addProductRouter  = require('./routes/addproduct');
const aboutRouter       = require('./routes/about');

const hbs       = handlebars.create({
    defaultLayout   :   'main',
    extname         :   'hbs',
});

const app       = express();

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));

app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/addproduct', addProductRouter);
app.use('/about', aboutRouter);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));