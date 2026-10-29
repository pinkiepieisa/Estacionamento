const Proprietario = require("../models/Proprietario");

async function listar(req, res) {
    try {
        const dados = await Proprietario.findAll();
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
}

async function cadastrar(req, res) {
    try {
        await Proprietario.create(req.body);
        res.send("Proprietário cadastrado");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
}

async function alterar(req, res) {
    try {
        await Proprietario.update(req.body, {
            where: { id: req.params.id }
        });
        res.send("Proprietário alterado");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
}

async function excluir(req, res) {
    try {
        await Proprietario.destroy({
            where: { id: req.params.id }
        });
        res.send("Proprietário excluído");
    } catch (erro) {
        // Normalmente ocorre quando o proprietário ainda possui veículos (chave estrangeira)
        res.status(400).json({
            erro: "Não foi possível excluir. Verifique se o proprietário possui veículos."
        });
    }
}

module.exports = {
    listar,
    cadastrar,
    alterar,
    excluir
};
