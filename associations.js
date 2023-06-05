const Site = require("./models/site");
const Departement = require("./models/departement");
const Service = require("./models/service");
const Stage = require("./models/stage");
const Contrat = require("./models/contrat");
const Alerte = require("./models/alerte");
const Fonction = require("./models/fonction");
const Personne = require("./models/personne");
const TypeContrat = require("./models/typecontrat");
const TypeStage = require("./models/typestage");

// Function for making One-To-Many Associations between Models
function makeAssociation(source, target) {
    source.hasMany(target);
    target.belongsTo(source);
}

makeAssociation(Site, Departement);
makeAssociation(Departement, Service);
makeAssociation(Service, Stage);
makeAssociation(Service, Contrat);
makeAssociation(Stage, Alerte);
makeAssociation(Contrat, Alerte);
makeAssociation(Fonction, Stage);
makeAssociation(Fonction, Contrat);
makeAssociation(Personne, Stage);
makeAssociation(Personne, Contrat);
makeAssociation(TypeContrat, Contrat);
makeAssociation(TypeStage, Stage);
