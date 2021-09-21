const knex = require('knex');

class PersistenciaCarritoMysql {
    constructor(config) {
        /**
         * @type {knex.Knex}
         */
        this.database = knex({
            client: 'mysql',
            connection: config.connection
        });
    }

    async listar() {
        return await this.database('carritos')
        .select('id', 'nombre');
    }

    async listarPorId(id) {
        return await this.database('carritos')
        .where({id: id})
        .select('id', 'nombre');
    }

    async agregar(car) {
        return await this.database('carritos')
        .insert(car);
    }
    
    async eliminar(id) {
        return await this.database('carritos')
            .where({id: id})
            .del();
    }
}

module.exports = PersistenciaCarritoMysql;