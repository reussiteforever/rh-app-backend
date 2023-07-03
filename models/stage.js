const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');
const state = require('../utils/states.js');

const Stage = db.define('Stage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dateDebut: { type: DataTypes.DATEONLY },
    dateFin: { type: DataTypes.DATEONLY },
    responsableStage: { type: DataTypes.STRING },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: state.ENABLED
    }
});

module.exports = Stage;