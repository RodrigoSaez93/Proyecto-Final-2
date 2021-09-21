const FileHandler = require("./FileHandler");

class PersistenciaProductosFilesystem {
  constructor(config) {
    this.fileHandler = new FileHandler("productos.txt");
  }

  async listar() {
    const productosString = await this.fileHandler.read();
    const productos = productosString != "" ? JSON.parse(productosString) : [];
    return productos;
  }

  async listarPorId(id) {
    const productosString = await this.fileHandler.read();
    const productos = productosString != "" ? JSON.parse(productosString) : [];
    return productos.find((prod) => prod.id === id);
  }

  async agregar(prod) {
    const productosString = await this.fileHandler.read();
    const productos = productosString != "" ? JSON.parse(productosString) : [];
    const id = productos.length > 0 ? productos[productos.length - 1].id + 1 : 0;
    productos.push(prod);
    return prod;
  }

  async eliminar(id) {
    const productosString = await this.fileHandler.read();
    const productos = productosString != "" ? JSON.parse(productosString) : [];
    const prodEliminar = productos.find((car) => car.id === id);
    const index = productos.indexOf(prodEliminar);
    productos.splice(index, 1);
    this.fileHandler.write(JSON.stringify(productos));
    return prodEliminar;
  }
}

module.exports = PersistenciaProductosFilesystem;
