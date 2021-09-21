const mongoose = require('mongoose');

class PersistenciaProductosMongo {
    constructor(config) {
        mongoose.connect(config.connection);
        this.productoSchema = new mongoose.Schema ({
            nombre: String,
            codigo: String,
            precio: Number,
            stock: Number
        });

        this.ProductoModel = new mongoose.model("producto", this.productoSchema);
    }

    async listar() {
        return await this.ProductoModel.find()
    }

    async listarPorId(id) {
        return await this.ProductoModel.findById(id).exec();
    }

    async agregar(prod) {
        const carritoNuevo = new this.ProductoModel(prod);
        return await carritoNuevo.save();
    }

    async eliminar(id) {
        return await this.ProductoModel.deleteOne({_id: id});
    }
}

module.exports = PersistenciaProductosMongo;