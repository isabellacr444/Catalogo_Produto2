const Sequelize = require('sequelize');

const connection = new Sequelize ('produto', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;