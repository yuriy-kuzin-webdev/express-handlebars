const {Router}  =   require('express');
const router    =   Router();
const Product   =   require('../models/product');


router.get('/', (req, res) => {
    res.render('addproduct', {
        title       :   'Добавление товара',
        isAddProduct:   true
    })
});
router.post('/', async (req, res) => {
    const product = new Product(req.body.title, req.body.price, req.body.img);
    await product.save();
    res.redirect('/products');
});

module.exports  =   router