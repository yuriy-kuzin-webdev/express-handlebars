const {Router}  =   require('express');
const Product   =   require('../models/product');
const router    =   Router();


router.get('/', async (req,res)=>{

    const products = await Product.getAll();

    res.render('products', {
        title       :   'Товары',
        isProducts  :   true,
        products
    })
});

router.get('/:id', async (req, res) => {
    
    const prod = await Product.getById(req.params.id);

    res.render('product', { prod });
});

module.exports  =   router