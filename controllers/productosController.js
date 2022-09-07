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
        if (!id) {
            res.send(dataJSON);
        }else{
            let producto = dataJSON.filter(el => el.id == id);
            res.send(producto)
        }
    },
    
    eliminarProducto: (req, res) => {
        const id = Number(req.params.id);
        found = validarId(id);

        // Si lo encontró lo elimina de la 
        if(found != undefined){
            dataJSON.splice(found, 1);
            fs.writeFileSync('./db.json', JSON.stringify(dataJSON), 'utf8')
            res.send('Borrado')
        }

       
       // https://meet.google.com/zoz-htqc-bkg


    },
  
    modificarProducto: (req, res) => {
     // const id = req.params.id; //Es lo mismo que la linea siguiente
        let productoNombre = req.body.nombre;
        let productoId = req.body.id;
        let productoPrecio = req.body.precio;
        let nuevoProducto = {id: productoId, nombre: productoNombre, precio: productoPrecio}
        
        dataJSON.forEach(el => {
    
            if(el.id == productoId){

                el = nuevoProducto;
            }
        });
        
        let dataNew = JSON.stringify(dataJSON)
        fs.writeFileSync("./db.json",dataNew);
 
    },
  
    crearProducto: (req, res) => {
        
        
        if(req.body != null){
        
    // const id = req.params.id; //Es lo mismo que la linea siguiente
        let productoNombre = req.body.nombre;
        let productoId = req.body.id;
        let productoPrecio = req.body.precio;
        let nuevoProducto = {id: productoId, nombre: productoNombre, precio: productoPrecio}
        
        dataJSON.push(nuevoProducto);

        fs.writeFileSync("./db.json",JSON.stringify(dataJSON));
        
        }else{

            req.send("Body vacio")//duda
        }
    
   //res.send(req.body);


    }
  
  }
  
  module.exports = productosControladores;