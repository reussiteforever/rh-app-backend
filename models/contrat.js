const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');
const state = require('../utils/states.js');

const Contrat = db.define('Contrat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dateDebut: { type: DataTypes.DATE },
    dateFin: { type: DataTypes.DATE },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: state.ENABLED
    }
});

module.exports = Contrat;