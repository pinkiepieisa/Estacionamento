const Veiculo = require("../models/Veiculo");
const Proprietario = require("../models/Proprietario");

async function listar(req, res) {
    try {
        const dados = await Veiculo.findAll({
            include: Proprietario
        });
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
}

async function cadastrar(req, res) {
    try {
        await Veiculo.create(req.body);
        res.send("Veículo cadastrado");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
}

async function alterar(req, res) {
    try {
        await Veiculo.update(req.body, {
            where: { id: req.params.id }
        });
        res.send("Veículo alterado");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
}

async function excluir(req, res) {
    try {
        await Veiculo.destroy({
            where: { id: req.params.id }
        });
        res.send("Veículo excluído");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
}

module.exports = {
    listar,
    cadastrar,
    alterar,
    excluir
};
