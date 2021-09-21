const admin = require("firebase-admin");

class PersistenciaCarritoFirebase {
    constructor(config) {
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: config.connection
        });
        this.db = admin.firestore();
        this.query = db.collection('carritos');
    }

    async listar() {
        const querySnapshot = await this.query.get();
        let docs = querySnapshot.docs;
        const response = docs.map((doc) => ({
            id: doc.id,
            nombre: doc.data().nombre
        }));

        return response;
    }

    async listarPorId(id) {
        const doc = query.doc(`${id}`)
        const item = await doc.get()
        const response = item.data()
        return response;
    }

    async agregar(car) {
        const doc = query.doc()
        await doc.create(car);
    }

    async eliminar(id) {
        const doc = query.doc(`${id}`)
        const item = await doc.delete();
        return item;
    }
}

module.exports = PersistenciaCarritoFirebase;