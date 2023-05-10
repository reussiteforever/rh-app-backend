const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');

const TypeContrat = db.define('TypeContrat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    libelleTypeContrat: { type: DataTypes.STRING }
});

module.exports = TypeContrat;