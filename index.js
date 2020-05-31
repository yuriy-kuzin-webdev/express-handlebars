const express   = require('express');
const path      = require('path');
const handlebars= require('express-handlebars');
const app       = express();

const PORT      = process.env.PORT || 3002

app.get('/', (req,res)=>{
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`));