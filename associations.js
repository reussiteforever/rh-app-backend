const Site = require("./models/site");
const Departement = require("./models/departement");


Site.hasMany(Departement);
Departement.belongsTo(Site);
