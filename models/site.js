const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');
const state = require('../utils/states.js');

const Site = db.define('Site', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codeSite: { type: DataTypes.STRING },
    libelleSite: { type: DataTypes.STRING },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: state.ENABLED
    }
});

module.exports = Site;
