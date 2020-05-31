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

router.get('/:id/edit', async(req, res) => {

    const prod = await Product.getById(req.params.id);

    res.render('editproduct', { prod });
});

router.post('/edit', async(req, res) => {

    await Product.update(req.body);
    
    res.redirect('/products');
});

module.exports  =   router