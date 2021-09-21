const knex = require('knex');

class PersistenciaProductosMysql {
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
        return await this.database('productos')
        .select('id', 'nombre', 'codigo', 'precio', 'stock');
    }

    async listarPorId(id) {
        return await this.database('productos')
        .where({id: id})
        .select('id', 'nombre', 'codigo', 'precio', 'stock');
    }

    async agregar(car) {
        return await this.database('productos')
        .insert(car);
    }
    
    async eliminar(id) {
        return await this.database('productos')
            .where({id: id})
            .del();
    }
}

module.exports = PersistenciaProductosMysql;