const PersistenciaCarritoFilesystem = require("./carritoFilesystem");
const PersistenciaProductosFilesystem = require("./productosFilesystem");
const PersistenciaCarritoMemoria = require("./carritoMemoria");
const PersistenciaProductosMemoria = require("./productosMemoria")
const PersistenciaCarritoMongo = require("./carritoMongo");
const PersistenciaProductosMongo = require("./productosMongo");
const PersistenciaCarritoMysql = require("./carritoMysql");
const PersistenciaProductosMysql = require("./productosMysql");
const PersistenciaCarritoSqlite = require("./carritoSqlite");
const PersistenciaProductosSqlite = require("./productosSqlite");
const PersistenciaCarritoFirebase = require("./carritoFirebase");
const PersistenciaProductosFirebase = require("./productosFirebase");

const configs = {
    mysqlLocal: {},
    mySqlSaas: {},
    sqlite: {},
    mongoLocal: {},
    mongoSaas: {},
    firebase: {}
}

class PersistenciaFactory {
    static obtenerPersistenciaCarrito(numero) {
        switch(numero) {
            case 0: //memoria
                return new PersistenciaCarritoMemoria();
            case 1: //filesystem
                return new PersistenciaCarritoFilesystem();
            case 2: //mysql local
                return new PersistenciaCarritoMysql(configs.mysqlLocal);
            case 3: //mysql dbaas
                return new PersistenciaCarritoMysql(configs.mySqlSaas);
            case 4: // sqlite
                return new PersistenciaCarritoSqlite(configs.sqlite);
            case 5: //mongodb local
                return new PersistenciaCarritoMongo(configs.mongoLocal);
            case 6: //mongodb dbaas
                return new PersistenciaCarritoMongo(configs.mongoSaas);
            case 7:
                return new PersistenciaCarritoFirebase(configs.firebase);
            default:
                throw new Error("Persistencia no encontrada");
        }
    }

    static obtenerPersistenciaProducto(id) {
        switch(numero) {
            case 0: //memoria
                return new PersistenciaProductosMemoria();
            case 1: //filesystem
                return new PersistenciaProductosFilesystem();
            case 2: //mysql local
                return new PersistenciaProductosMysql(configs.mysqlLocal);
            case 3: //mysql dbaas
                return new PersistenciaProductosMysql(configs.mySqlSaas);
            case 4: // sqlite
                return new PersistenciaProductosSqlite(configs.sqlite);
            case 5: //mongodb local
                return new PersistenciaProductosMongo(configs.mongoLocal);
            case 6: //mongodb dbaas
                return new PersistenciaProductosMongo(configs.mongoSaas);
            case 7:
                return new PersistenciaProductosFirebase(configs.firebase);
            default:
                throw new Error("Persistencia no encontrada");
        }
    }
}

module.exports = PersistenciaFactory;