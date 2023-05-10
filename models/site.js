const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');

const Site = db.define('Site', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codeSite: { type: DataTypes.STRING },
    libelleSite: { type: DataTypes.STRING },
});
module.exports = Site;
