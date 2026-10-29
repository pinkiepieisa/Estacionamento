const express = require("express");
const cors = require("cors");

const proprietarioRoutes = require("./routes/proprietarioRoutes");
const veiculoRoutes = require("./routes/veiculoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/proprietarios", proprietarioRoutes);
app.use("/veiculos", veiculoRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
