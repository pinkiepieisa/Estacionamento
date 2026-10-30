const db = require("./db");
require("./Proprietario");
require("./Veiculo");

db.sequelize
  .sync()
  .then(() => {
    console.log("Tabelas criadas com sucesso!");
    process.exit(0);
  })
  .catch((erro) => {
    console.error("Erro ao criar tabelas:", erro);
    process.exit(1);
  });
