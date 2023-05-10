const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');
const state = require('../utils/states.js');

const Stage = db.define('Stage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dateDebut: { type: DataTypes.DATE },
    dateFin: { type: DataTypes.DATE },
    responsableStage: { type: DataTypes.STRING },
    idTypeStage: { type: DataTypes.INTEGER },
    idPersonne: { type: DataTypes.INTEGER },
    idService: { type: DataTypes.INTEGER },
    idFonction: { type: DataTypes.INTEGER },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: state.ENABLED
    }
});

module.exports = Stage;