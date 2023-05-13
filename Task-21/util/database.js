const Sequelize = require('sequelize');

const sequelize = new Sequelize('NewShema', 'root', 'Sahil3453%%', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
