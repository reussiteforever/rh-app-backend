const express = require("express");
const db = require('./dbconnexion.js');
const Personne = require('./models/personne.js');
const ServiceO = require('./models/service.js');

const app = express();

/**
 * SYNCHRONIZATION OF MODELS INTO DATABASE TABLES
 */

async function synchro() {
    db.Personne = Personne;
    db.ServiceO= ServiceO;
    await db.sync();
}
synchro();
 

