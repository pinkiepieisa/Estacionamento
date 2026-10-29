const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Proprietario = require("./Proprietario");

const Veiculo = sequelize.define("Veiculo", {

    placa: DataTypes.STRING,
    modelo: DataTypes.STRING,
    cor: DataTypes.STRING,
    proprietario_id: DataTypes.INTEGER

}, {
    tableName: "veiculo",
    timestamps: false
});

Proprietario.hasMany(Veiculo, {
    foreignKey: "proprietario_id"
});

Veiculo.belongsTo(Proprietario, {
    foreignKey: "proprietario_id"
});

module.exports = Veiculo;
