const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');
const state = require('../utils/states.js');

const Alerte = db.define('Alerte', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dateEnvoie: {type: DataTypes.DATE},
    statutEnvoie: {type: DataTypes.INTEGER}
});

module.exports = Alerte;
