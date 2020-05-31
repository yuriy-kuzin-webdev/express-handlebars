const {Router}  =   require('express');
const router    =   Router();


router.get('/', (req,res)=>{
    res.render('addproduct', {
        title       :   'Добавление товара',
        isAddProduct:   true
    })
});

module.exports  =   router