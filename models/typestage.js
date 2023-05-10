const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');

const TypeStage = db.define('TypeStage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    libelleTypeStage: { type: DataTypes.STRING }
});

module.exports = TypeStage;