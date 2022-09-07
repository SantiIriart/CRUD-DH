const express = require('express');
const app = express();
const productosRouter = require('./routes/productosRouter')
const indexRouter = require('./routes/indexRouter')

//Server
app.listen(8080, () => console.log('Server online'));

//Middlewares
app.use(express.json())
app.use('/', indexRouter)
app.use('/productos', productosRouter)



// Error 404
 app.get('*', (req, res) => {
     res.send('/erro404')
 });








 // LINK GITHUB: https://github.com/SantiIriart/CRUD-DH
