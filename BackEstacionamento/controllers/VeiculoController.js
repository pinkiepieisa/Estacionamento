const express = require("express");
const router = express.Router();

// Importando o módulo do Veículo
const Veiculo = require("../models/Veiculo");

// Busca Veículos (GET)
router.get("/", async (req, res) => {
  const veiculos = await Veiculo.findAll();
  res.status(200).json(veiculos);
});

// Cadastra Veículo (POST)
router.post("/", async (req, res) => {
  const { placa, ano, mensalidade, fk_proprietario } = req.body;
  await Veiculo.create({ placa, ano, mensalidade, fk_proprietario });
  res.status(200).json({ message: "Cadastrado com sucesso" });
});

// Busca Veículo por id (GET)
router.get("/:id", async (req, res) => {
  const veiculo = await Veiculo.findByPk(req.params.id);
  res.status(200).json(veiculo);
});

// Deleta Veículo por id (DELETE)
router.delete("/:id", async (req, res) => {
  await Veiculo.destroy({
    where: { id_veiculo: req.params.id },
  });
  res.status(200).json({ message: "Excluído com sucesso" });
});

// Altera Veículo por id (PUT)
router.put("/:id", async (req, res) => {
  const { placa, ano, mensalidade, fk_proprietario } = req.body;
  await Veiculo.update(
    { placa, ano, mensalidade, fk_proprietario },
    { where: { id_veiculo: req.params.id } },
  );
  res.status(200).json({ message: "Atualizado com sucesso" });
});

module.exports = router;
