const Sequelize = require("sequelize");

const connection = new Sequelize('artigosnow', 'root', '9666',{
    host: 'localhost',
    dialect: 'mysql',
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection;