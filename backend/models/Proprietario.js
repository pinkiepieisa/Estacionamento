const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Proprietario = sequelize.define("Proprietario", {

    nome: DataTypes.STRING,
    telefone: DataTypes.STRING

}, {
    tableName: "proprietario",
    timestamps: false
});

module.exports = Proprietario;
