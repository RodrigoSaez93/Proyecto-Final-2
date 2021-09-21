
const PersistenciaFactory = require("../persistencia/factory");
const numeroPersistencia = 0;
const persistenciaProductos = PersistenciaFactory.obtenerPersistenciaProducto(numeroPersistencia);

class productoss {
    static getProductos() {
        return persistenciaProductos.listar();
    }
    
    async listar(req, res) {
        const productos = await persistenciaProductos.listar();
        if (productos.length === 0) {
            res.status(500).json({ error: "No hay productos cargados" });
        }
        else {
            res.json(productos);
        }
    }

    async listarPorId(req, res) {
        const producto = await persistenciaProductos.listarPorId(req.params.id);
        if (producto != null) {
            res.json(producto);
        }
        else {
            res.status(404).json({ error: "No se encontró el producto" });
        }
    }

    async insertar(req, res) {
        const producto = req.body;
        let time =Date.now()
        producto.time=time

        await persistenciaProductos.agregar(producto);
        res.json(producto);
    }

    async actualizar(req, res) {
        const productoEnLista = await persistenciaProductos.listarPorId(req.params.id);
        if(productoEnLista != null) 
        {
           persistenciaProductos.actualizar(req.body);
        }
        else {
            res.status(404).json({error: "No se encontró el producto"});
        }
    }

    async eliminar(req, res) {
        const productoAEliminar = await persistenciaProductos.listarPorId(req.params.id);
        if(productoAEliminar != null) {
            await persistenciaProductos.eliminar(req.params.id)
            res.json({mensaje: "Producto eliminado", producto: productoAEliminar});
        } else {
            res.status(404).json({error: "No se encontró el producto"});
        }
    }
}

module.exports = productoss;