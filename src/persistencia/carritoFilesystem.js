const FileHandler= require("./FileHandler")

class PersistenciaCarritoFilesystem{

    constructor(config) {
        this.fileHandler = new FileHandler("carrito.txt")
    }

    async listar() {
        const carritoString = await this.fileHandler.read();
        const carritos = carritoString != "" ? JSON.parse(carritoString) : [];
        return carritos;
    }

    async listarPorId(id) {
        const carritoString = await this.fileHandler.read();
        const carritos = carritoString != "" ? JSON.parse(carritoString) : [];
        return carritos.find(car => car.id === id);
    }

    async agregar(car) {
        const carritoString = await this.fileHandler.read();
        const carritos = carritoString != "" ? JSON.parse(carritoString) : [];
        const id = carritos.length > 0 ? carritos[carritos.length - 1].id + 1 : 0;
        carritos.push(car);
        return car;
    }

    async eliminar(id) {
        const carritoString = await this.fileHandler.read();
        const carritos = carritoString != "" ? JSON.parse(carritoString) : [];
        const carEliminar = carritos.find(car => car.id === id);
        const index = carritos.indexOf(carEliminar);
        carritos.splice(index, 1);
        this.fileHandler.write(JSON.stringify(carritos));
        return carEliminar;
    }
}

module.exports=PersistenciaCarritoFilesystem