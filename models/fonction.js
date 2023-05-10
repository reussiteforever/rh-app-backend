const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');

const Fonction = db.define('Fonction', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codeFonction: { type: DataTypes.STRING },
    libelleFonction: { type: DataTypes.STRING },
});
module.exports = Fonction;
