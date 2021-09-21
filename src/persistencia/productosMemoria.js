const productos = [];
let id = 0;

class PersistenciaProductosMemoria {
    constructor(config) {
    }

    listar() {
        return new Promise((resolve, reject) => {
            resolve(productos);
        })
    }

    listarPorId(id) {
        return new Promise((resolve, reject) => {
            resolve(productos.find(prod => prod.id === id));
        })
    }

    agregar(prod) {
        prod.id = ++id;
        productos.push(prod);
        return new Promise((resolve, reject) => {
            resolve(prod);
        });
    }

    eliminar(id) {
        const item = productos.find(prod => prod.id === id);
        if(item != null) {
            const index = productos.indexOf(item);
            productos.splice(index, 1);
        }

        return new Promise((resolve, reject) => {
            resolve(item);
        })
    }
}

module.exports = PersistenciaProductosMemoria;