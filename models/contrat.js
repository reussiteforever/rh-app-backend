const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');

const Contrat = db.define('Contrat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dateDebut: { type: DataTypes.DATE },
    dateFin: { type: DataTypes.DATE },
    idTypeContrat: { type: DataTypes.INTEGER },
    idPersonne: { type: DataTypes.INTEGER },
    idService: { type: DataTypes.INTEGER },
    idFonction: { type: DataTypes.INTEGER }
});

module.exports = Contrat;