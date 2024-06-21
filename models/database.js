const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blogApp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
