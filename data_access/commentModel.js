//import { dataAccessInst } from './DataAccess';
var dataAccessInst = require('./DataAccess');
var Sequelize = require('sequelize');

class Comment {
    constructor() {
        this.model = dataAccessInst.connection.define('comment', {
            idComment: {type: Sequelize.INTEGER,  primaryKey: true },
            idCustomer: {type: Sequelize.INTEGER },
            date: {type: Sequelize.DATE },
            text: {type: Sequelize.TEXT}
        });
        //customer.model.hasMany(this.model, { foreignKey: 'idCustomer' });
    }

    getAllRows() {
        return this.model.findAll();
    }
}

const comment = new Comment();

module.exports = comment;