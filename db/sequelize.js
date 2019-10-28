const Sequelize = require('sequelize');
var models = require('./models');

module.exports = {
  initDB: function() {

    //sequelize
    // Option 1: Passing parameters separately
    const sequelize = new Sequelize('ccdevelopment', 'root', '', {
      host: 'localhost',
      dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    });

    // Option 2: Passing a connection URI
    //const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });

      models.sequelize.sync({force: true}).then(() => {
        console.log('Tabels synched')
      });

      
        

  },
};

