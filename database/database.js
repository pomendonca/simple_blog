const { Sequelize } = require("sequelize")
const sequelize = require("sequelize")

const connection = new Sequelize('guiapress', 'root', '123', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection