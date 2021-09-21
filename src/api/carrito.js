const productos =require("./productos")
const numeroPersistencia = 0;
const PersistenciaFactory = require("../persistencia/factory");

const persistenciaCarrito = PersistenciaFactory.obtenerPersistenciaCarrito(numeroPersistencia);

class carritos {   
   

    async listarPorId(req, res) {
        const item = await persistenciaCarrito.listarPorId(req.params.id);
        if (item != null) {
            res.json(item);
        }
        else {
            res.status(404).json({ error: "No se encontró el producto" });
        }
    }

    async agregar(req, res) {
        let time =Date.now()
        const item ={}
        item.timestamp=time
        
        const producto = productos.getProductos().find(pro=>pro.id==req.params.id_producto)
        item.producto=producto
        
        carrito.push(item);       
        persistenciaCarrito.agregar(carrito);
        
        res.json(item);
    }

    
    async eliminar(req, res) {
        const itemEliminar = await persistenciaCarrito.listarPorId(req.params.id);
        if(itemEliminar != null) {
            await persistenciaCarrito.eliminar(req.query.id);
            res.json({mensaje: "Producto eliminado", producto: itemEliminar});
        } else {
            res.status(404).json({error: "No se encontró el producto"});
        }
    }
}

module.exports = carritos;