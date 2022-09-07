const fs = require('fs');
let data = fs.readFileSync('./db.json', 'utf8');
let dataJSON = JSON.parse(data);


const validarId = (id) => {
    let found = undefined;
        dataJSON.forEach((elem, i) => {
            if (elem.id === id) {
                found = i;
            } 
        })
    return found;
}


const productosControladores = {
    listarProductos: (req, res) => {
       res.send(dataJSON)
    },
  
    mostrarProductoPorId: (req, res) => {
       // const id = req.params.id; //Es lo mismo que la linea siguiente
        const { id } = req.params;
        let found = validarId(id);
        let producto = dataJSON.filter(el => el.id == found);
        res.send(producto)
        
    },
    
    eliminarProducto: (req, res) => {
        const id = Number(req.params.id);

        let found = validarId(id);

        // Si lo encontró lo elimina de la 
        if(found != undefined){
            dataJSON.splice(found, 1);
            fs.writeFileSync('./db.json', JSON.stringify(dataJSON), 'utf8')
            res.send('Borrado')
        }
    },
  
    modificarProducto: (req, res) => {
        const id = Number(req.params.id);
        let found = validarId(id);
        
        if(found != undefined)
            dataJSON.forEach(el => {
                if(el.id == id){
                    el.nombre = req.body.nombre;
                    el.precio = req.body.precio;
                    let dataNew = JSON.stringify(dataJSON)
                    fs.writeFileSync("./db.json",dataNew, 'utf-8');
                    res.send('editado')
                }
            });
    },
       
        
  
    crearProducto: (req, res) => {
        if(req.body != null){
        let productoId = dataJSON[dataJSON.length-1].id + 1;
        let productoNombre = req.body.nombre;
        let productoPrecio = req.body.precio;
        
        const nuevoProducto = {id: productoId, nombre: productoNombre, precio: productoPrecio}
        
        dataJSON.push(nuevoProducto);

        fs.writeFileSync("./db.json",JSON.stringify(dataJSON));
        res.send('Creado')

         }else{
            res.send("Body vacio")//duda
         }
    
        res.send(req.body);


    }
  
  }
  
  module.exports = productosControladores;