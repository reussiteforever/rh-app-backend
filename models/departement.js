const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');
const state = require('../utils/states.js');

const Departement = db.define('Departement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codeDepartement: { type: DataTypes.STRING },
    libelleDepartement: { type: DataTypes.STRING },
    idSite: { type: DataTypes.INTEGER },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: state.ENABLED
    }
});
module.exports = Departement;
