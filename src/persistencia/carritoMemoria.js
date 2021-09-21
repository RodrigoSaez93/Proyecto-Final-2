const carritos = [];
let id = 0;

class PersistenciaCarritoMemoria {
    constructor(config) {
    }

    listar() {
        return new Promise((resolve, reject) => {
            resolve(carritos);
        })
    }

    listarPorId(id) {
        return new Promise((resolve, reject) => {
            resolve(carritos.find(car => car.id === id));
        })
    }

    agregar(car) {
        car.id = ++id;
        carritos.push(car);
        return new Promise((resolve, reject) => {
            resolve(car);
        });
    }

    eliminar(id) {
        const item = carritos.find(car => car.id === id);
        if(item != null) {
            const index = carritos.indexOf(item);
            carritos.splice(index, 1);
        }

        return new Promise((resolve, reject) => {
            resolve(item);
        })
    }
}

module.exports = PersistenciaCarritoMemoria;