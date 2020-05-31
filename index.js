const express   = require('express');
const path      = require('path');
const PORT      = process.env.PORT || 3002

const handlebars= require('express-handlebars');

const hbs       = handlebars.create({
    defaultLayout   :   'main',
    extname         :   'hbs',
});

const app       = express();

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.get('/', (req,res)=>{
    res.render('index', {
        title   :   'Главная страница'
    })
});

app.get('/products', (req,res)=>{
    res.render('products', {
        title   :   'Товары'
    })
});

app.get('/addproduct', (req,res)=>{
    res.render('addproduct', {
        title   :   'Добавление товара'
    })
});

app.get('/about', (req,res)=>{
    res.render('about', {
        title   :   'О нас'
    })
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));