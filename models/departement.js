const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');

const Departement = db.define('Departement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codeDepartement: { type: DataTypes.STRING },
    libelleDepartement: { type: DataTypes.STRING },
    idSite: { type: DataTypes.INTEGER }
});
module.exports = Departement;
