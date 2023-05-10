const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');

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
    idFonction: { type: DataTypes.INTEGER }
});

module.exports = Stage;