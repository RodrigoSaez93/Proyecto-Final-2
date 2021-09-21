const admin = require("firebase-admin");

class PersistenciaProductoFirebase {
    constructor(config) {
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: config.connection
        });
        this.db = admin.firestore();
        this.query = db.collection('productos');
    }

    async listar() {
        const querySnapshot = await this.query.get();
        let docs = querySnapshot.docs;
        const response = docs.map((doc) => ({
            id: doc.id,
            nombre: doc.data().nombre,
            codigo: doc.data().codigo,
            precio: doc.data().precio,
            stock: doc.data().stock
        }));

        return response;
    }

    async listarPorId(id) {
        const doc = query.doc(`${id}`)
        const item = await doc.get()
        const response = item.data()
        return response;
    }

    async agregar(prod) {
        const doc = query.doc()
        await doc.create(prod);
    }

    async eliminar(id) {
        const doc = query.doc(`${id}`)
        const item = await doc.delete();
        return item;
    }
}

module.exports = PersistenciaProductoFirebase;