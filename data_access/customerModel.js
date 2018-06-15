//import { dataAccessInst } from './DataAccess';
var dataAccessInst = require('./DataAccess');
var Sequelize = require('sequelize');
//import { company } from './DataAccess';
var company = require('./companyModel');
//import { comment } from './commentModel';
var comment = require('./commentModel');


class Customer {
    constructor() {
        this.model = dataAccessInst.connection.define('customer', {
            idCustomer: {type: Sequelize.INTEGER, primaryKey: true},
            firstName: {type: Sequelize.STRING(30) },
            lastName: {type: Sequelize.STRING(30) },
            idCompany: {type: Sequelize.INTEGER },
            email: {type: Sequelize.STRING(40) },
            phone: {type: Sequelize.STRING(15) },
            idComments: {type: Sequelize.INTEGER }
        });
        this.model.belongsTo(companyModel, {foreignKey: 'idCompany'})
        this.model.belongsTo(commentModel, {foreignKey: 'idCustomer'})
    }

    getAllRows() {
        return this.model.findAll();
    }
}

const customer = new Customer();

module.exports = customer;

