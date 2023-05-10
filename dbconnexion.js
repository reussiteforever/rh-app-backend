const { Sequelize } = require('sequelize');

//Connection To SQL Server database
const sequelize = new Sequelize('projetrh', 'sa', 'Cestmonvrainom1', {
    host: 'TGOCL0268V48', // Put appropriate host name
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

