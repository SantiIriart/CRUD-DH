const express = require('express');
const route = express.Router();
const productosControladores = require('../controllers/productosController');

route.get('/', productosControladores.listarProductos);

route.get('/:id', productosControladores.mostrarProductoPorId);
route.put('/edit/:id', productosControladores.modificarProducto);
route.post('/create', productosControladores.crearProducto)
route.delete('/delete/:id', productosControladores.mostrarProductoPorId);


module.exports = route;