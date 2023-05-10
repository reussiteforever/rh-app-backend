/**
 * SEQUELIZE is used to define models
 * https://sequelize.org/docs/v6/core-concepts/model-basics/
 */

const { DataTypes } = require('sequelize');
const db = require('../dbconnexion.js');
const state = require('../utils/states.js');

const Personne = db.define('Personne', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: { type: DataTypes.STRING },
    prenom: { type: DataTypes.STRING },
    raisonSociale: { type: DataTypes.STRING },
    Matricule: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    telephone: { type: DataTypes.STRING },
    adresse: { type: DataTypes.STRING },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: state.ENABLED
    }
});

module.exports = Personne;