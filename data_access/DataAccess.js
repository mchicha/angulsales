var Sequelize = require('sequelize');

class DataAccess {

    consructor() {
        this.connection = new Sequelize('crm_db', 'root', '1234', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false, // prevent string deprication
        pool: { // You can read about the pool in the documentation
            max: 30,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
        })
    }       
}

const dataAccessInst = new DataAccess();

module.exports = dataAccessInst;