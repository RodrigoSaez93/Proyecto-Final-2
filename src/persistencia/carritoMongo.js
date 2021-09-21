const mongoose = require('mongoose');

class PersistenciaCarritoMongo {
    constructor(config) {
        mongoose.connect(config.connection);
        this.carritoSchema = new mongoose.Schema ({
            name: String
        });

        this.CarritoModel = new mongoose.model("carrito", this.carritoSchema);
    }

    async listar() {
        return await this.CarritoModel.find()
    }

    async listarPorId(id) {
        return await this.CarritoModel.findById(id).exec();
    }

    async agregar(car) {
        const carritoNuevo = new this.CarritoModel(car);
        return await carritoNuevo.save();
    }

    async eliminar(id) {
        return await this.CarritoModel.deleteOne({_id: id});
    }
}

module.exports = PersistenciaCarritoMongo;