const { Sequelize } = require('sequelize');

//Connection To SQL Server database
const sequelize = new Sequelize('projetrh', 'sa', 'Cestmonvrainom1', {
    host: 'TGOCL0268V48',
    dialect: 'mssql',
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
//call of connection function
testConnexion();
async function testConnexion() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = sequelize; //https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/

