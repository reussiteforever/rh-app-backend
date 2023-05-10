const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');
const state = require('../utils/states.js');

const Service = db.define('Service', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codeService: { type: DataTypes.STRING },
    libelleService: { type: DataTypes.STRING },
    idDepartement: { type: DataTypes.INTEGER },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: state.ENABLED
    }
});
module.exports = Service;
