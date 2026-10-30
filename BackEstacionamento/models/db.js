const Sequelize = require("sequelize");

// Banco: estacionamento | usuário: root | senha: root (ajuste se necessário)
const sequelize = new Sequelize(
  process.env.DB_NAME || "estacionamento",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "root",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
  },
);

module.exports = {
  Sequelize,
  sequelize,
};
