const express = require("express");
const router = express.Router();

// Importando o módulo do Proprietário
const Proprietario = require("../models/Proprietario");

// Busca Proprietários (GET)
router.get("/", async (req, res) => {
  const proprietarios = await Proprietario.findAll();
  res.status(200).json(proprietarios);
});

// Cadastra Proprietário (POST)
router.post("/", async (req, res) => {
  const { nome, cpf } = req.body;
  await Proprietario.create({ nome, cpf });
  res.status(200).json({ message: "Cadastrado com sucesso" });
});

// Busca Proprietário por id (GET)
router.get("/:id", async (req, res) => {
  const proprietario = await Proprietario.findByPk(req.params.id);
  res.status(200).json(proprietario);
});

// Deleta Proprietário por id (DELETE)
router.delete("/:id", async (req, res) => {
  await Proprietario.destroy({
    where: { id_proprietario: req.params.id },
  });
  res.status(200).json({ message: "Excluído com sucesso" });
});

// Altera Proprietário por id (PUT)
router.put("/:id", async (req, res) => {
  const { nome, cpf } = req.body;
  await Proprietario.update(
    { nome, cpf },
    { where: { id_proprietario: req.params.id } },
  );
  res.status(200).json({ message: "Atualizado com sucesso" });
});

module.exports = router;
