const sequelize = require('sequelize');
const Stage = require('../models/stage');
/**
 * Creation d'une occurrence de stage
 */
Stage.create({
    dateDebut: Date.now(),
    dateFin: Date.now(),
    responsableStage: "Issifou Mama Sani",
    Service:{
        codeService: 1001,
        libelleService: "Service Informatique",
        Departement: {
            codeDepartement: 2002,
            libelleDepartement: "Direction finance Comptable",
            Site: {
                codeSite: 3003,
                libelleSite: "Cimtogo Lomé",
            }
        }
    }
});