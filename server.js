const express = require('express');
const app = express();
const cors = require('cors');

/**
 * UTILITIES IMPORTATION
 */
const assoc = require('./utils/associations');
// const data = require('./utils/dataCreator');

app.use(cors()); // Use this after the variable declaration
app.use(express.json());

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
const departementRoutes = require('./routes/departement.js');
const fonctionRoutes = require('./routes/fonction.js');
const serviceRoutes = require('./routes/service.js');
const siteRoutes = require('./routes/site.js');
const stageRoutes = require('./routes/stage.js');
const typecontratRoutes = require('./routes/typecontrat.js');
const typestageRoutes = require('./routes/typestage.js');

/**
 * using routes in the server
 */
app.use("/api/personne", personnesRoutes);
app.use("/api/contrat", contratRoutes);
app.use("/api/departement", departementRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/site", siteRoutes);
app.use("/api/stage", stageRoutes);
app.use("/api/typecontrat", typecontratRoutes);
app.use("/api/typestage", typestageRoutes);
app.use("/api/fonction", fonctionRoutes);

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
    // await db.sync({ force: true }); // This creates the table, dropping it first if it already existed 
    await db.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)
}
synchro();
