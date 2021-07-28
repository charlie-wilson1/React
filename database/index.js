const {Sequelize} = require('sequelize');
const config = require('../dbConfig.js');

const connection = new Sequelize(`${config.DB_DB}`, `${config.DB_USER_NAME}`, `${config.DB_PW}`, {host: `${config.DB_HOST}`, port: `${config.DB_PORT}`,logging: false, dialect: 'postgres' });

// connection.authenticate()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch(e => {
//   console.error('Unable to connect to the database:', e);
// })

module.exports = {connection}
  