import { dataAccessInst } from './DataAccess';
//var dataAccessInst = require('./DataAccess');
var Sequelize = require('sequelize');

class Company {
    constructor() {
        this.model = dataAccessInst.connection.define('company', {
            idCompany: {type: Sequelize.INTEGER, primaryKey: true},
            name: {type: Sequelize.STRING(40) },
            address: {type: Sequelize.STRING(50) },
            country: {type: Sequelize.STRING(30) }
        });
    }

    getAllRows() {
        return this.model.findAll();
    }
}

const company = new Company();

module.exports = company;
