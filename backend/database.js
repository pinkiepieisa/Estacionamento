const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "estacionamento",   // nome do banco
    "root",             // usuário do MySQL
    "root",             // senha do MySQL (ajuste para a sua)
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;
