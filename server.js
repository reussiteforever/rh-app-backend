const express = require("express");
const app = express();

// Connexion to the database
const db = require('./dbconnexion.js');
/**
 * MODELS IMPORTATION
 */
const Personne = require('./models/personne.js');
const Service = require('./models/service.js');
const Contrat = require('./models/contrat.js');
const Departement = require('./models/departement.js');
const Fonction = require('./models/fonction.js');
const Site = require('./models/site.js');
const Stage = require('./models/stage.js');
const TypeContrat = require('./models/typecontrat.js');
const TypeStage = require('./models/typestage.js');
/**
 * ROUTES IMPORTATION
 */
const personnesRoutes = require('./routes/personne.js');
const contratRoutes = require('./routes/contrat.js');
/**
 * UTILITIES IMPORTATION
 */
const state = require('./utils/states.js');


//call of connection function
testConnexion();
async function testConnexion() {
    try {
        await db.authenticate().then(()=>{
            app.listen(3000, () => {
                console.log("Server running on port 3000");
            });
        });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

/**
 * SYNCHRONIZATION OF MODELS INTO DATABASE TABLES
 */
async function synchro() {
    db.Personne = Personne;
    db.Service= Service;
    db.Contrat= Contrat;
    db.Departement= Departement;
    db.Fonction= Fonction;
    db.Site= Site;
    db.Stage= Stage;
    db.TypeContrat= TypeContrat;
    db.TypeStage= TypeStage;
    await db.sync();
}
synchro();

/**
 * using routes in the server
 */
app.use(express.json());
app.use("/personne", personnesRoutes);
app.use("/contrat", contratRoutes);
