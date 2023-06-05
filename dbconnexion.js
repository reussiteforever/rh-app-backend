// https://stackoverflow.com/questions/25577248/node-js-mssql-tedius-connectionerror-failed-to-connect-to-localhost1433-conn

const { Sequelize } = require('sequelize');
//Connection To SQL Server database
const sequelize = new Sequelize('projetrh', 'sa', 'Cestmonvrainom1', {
    host: 'REUSSITEFOREVER', // Put appropriate host name
    // host: 'TGOCL0268V48', // Put appropriate host name
    dialect: 'mssql', // Put the dialect that you're working with
    dialectOptions: {
        options: {
            enableArithAbort: false,
            cryptoCredentialsDetails: {
                minVersion: 'TLSv1'
            },
        }
    },
    define: {
        // to prevent Sequelize from pluralizing Tables' name
        freezeTableName: true
    }
});

module.exports = sequelize; //https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/

