const express = require('express');
const route = express.Router();
const productosControladores = require('../controllers/productosController');

route.get('/products', productosControladores.listarProductos);

route.get('/products/:id', productosControladores.mostrarProductoPorId);
route.put('products/edit/:id', productosControladores.modificarProducto);
route.post('const rout')
route.delete('products/delete/:id', productosControladores.mostrarProductoPorId);


module.exports = route;